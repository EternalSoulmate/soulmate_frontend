// src/pages/RecordingPage.jsx
import { useEffect, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import Layout from '../components/Layout/Layout';
import * as S from './RecordingPage.styles';

import avatarIcon from '../assets/icons/avatar.svg';
import endRecordingButtonImg from '../assets/buttons/endrecordingbutton.svg';

function RecordingPage() {
  const { date } = useParams();
  const navigate = useNavigate();
  
  const videoRef = useRef(null);
  const socketRef = useRef(null);
  const localStreamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const streamIntervalRef = useRef(null);
  const sequenceRef = useRef({ frame: 0, audio: 0 });
  const sessionIdRef = useRef(null);

  const stopAllStreams = useCallback(() => {
    if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);
    if (socketRef.current && sessionIdRef.current) {
      socketRef.current.emit('stop-video-stream', { sessionId: sessionIdRef.current, userId: 'temp-user', reason: '사용자 요청' });
    }
    streamIntervalRef.current = null; sequenceRef.current.frame = 0;

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    mediaRecorderRef.current = null; sequenceRef.current.audio = 0;
    
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach(track => track.stop());
    }
    localStreamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;

    if (socketRef.current) socketRef.current.disconnect();
    socketRef.current = null;
    sessionIdRef.current = null;
    console.log('✅ 모든 스트림과 연결이 중지되었습니다.');
  }, []);

  const startAudioCapture = useCallback(() => {
    if (!localStreamRef.current || !socketRef.current) return;
    try {
      const audioTrack = localStreamRef.current.getAudioTracks()[0];
      if (!audioTrack) return console.error('❌ 오디오 트랙 없음');
      
      const audioStream = new MediaStream([audioTrack]);
      const recorder = new MediaRecorder(audioStream, { mimeType: 'audio/webm;codecs=opus' });
      mediaRecorderRef.current = recorder;
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (socketRef.current && socketRef.current.connected) {
              const base64Audio = reader.result.split(',')[1];
              const audioFrameId = 'audio_' + Date.now() + '_' + sequenceRef.current.audio;
              socketRef.current.emit('audio-frame', { 
                sessionId: sessionIdRef.current,
                frameId: audioFrameId,
                timestamp: Date.now(),
                audioData: base64Audio, 
                sequenceNumber: sequenceRef.current.audio++,
                format: 'webm'
              });
            }
          };
          reader.readAsDataURL(event.data);
        }
      };
      recorder.start(1000);
      console.log('🎤 음성 캡처 시작');
    } catch (error) {
      console.error('❌ 음성 캡처 실패:', error);
    }
  }, []);

  const startFrameCapture = useCallback(() => {
    if (!localStreamRef.current || !socketRef.current || !videoRef.current) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 640; canvas.height = 480;
    
    sessionIdRef.current = 'session_' + Date.now();
    
    socketRef.current.emit('start-video-stream', { 
      sessionId: sessionIdRef.current, 
      userId: 'temp-user',
      quality: {
        width: 640,
        height: 480,
        frameRate: 30,
        bitrate: 1000
      },
      enableAudio: true,
      recordingEnabled: false,
      aiProcessingEnabled: true
    });
    
    streamIntervalRef.current = setInterval(() => {
      if (videoRef.current && videoRef.current.videoWidth > 0) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const frameData = canvas.toDataURL('image/jpeg', 0.7).split(',')[1];
        const frameId = 'frame_' + Date.now() + '_' + sequenceRef.current.frame;
        socketRef.current.emit('video-frame', { 
          sessionId: sessionIdRef.current,
          frameId: frameId,
          timestamp: Date.now(),
          frameData, 
          sequenceNumber: sequenceRef.current.frame++
        });
      }
    }, 100);
    console.log('📹 영상 캡처 시작');
  }, []);

  useEffect(() => {
    const startProcess = async () => {
      socketRef.current = io('https://soulmate.kro.kr/video', {
        transports: ['websocket', 'polling'],
        secure: true
      });
      socketRef.current.on('connect', () => console.log('✅ 서버 연결됨'));
      socketRef.current.on('disconnect', () => console.log('❌ 서버 연결 해제됨'));
      
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 30 } },
          audio: true
        });
        localStreamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        console.log('✅ 카메라/마이크 접근 성공');

        setTimeout(() => {
          startFrameCapture();
          startAudioCapture();
        }, 500);
      } catch (error) {
        console.error('❌ 카메라/마이크 접근 실패:', error);
        alert('카메라/마이크 접근에 실패했습니다.');
      }
    };

    startProcess();

    return () => {
      stopAllStreams();
    };
  }, [startAudioCapture, startFrameCapture, stopAllStreams]);

  const handleEndRecording = () => {
    stopAllStreams();
    navigate(`/after-record/${date}`);
  };

  return (
    <Layout>
      <S.ContentContainer>
        <S.UserVideoWrapper>
          <S.LiveVideo ref={videoRef} autoPlay playsInline muted />
        </S.UserVideoWrapper>
        <S.AvatarVideoWrapper>
          <S.AvatarImage src={avatarIcon} alt="아바타" />
        </S.AvatarVideoWrapper>
        <S.EndRecordingButtonWrapper onClick={handleEndRecording}>
          <img src={endRecordingButtonImg} alt="기록 끝" />
        </S.EndRecordingButtonWrapper>
      </S.ContentContainer>
    </Layout>
  );
}

export default RecordingPage;