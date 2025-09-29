// src/pages/RecordingPage.jsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import endChatIcon from '../assets/buttons/end_chat.svg';
import * as S from './RecordingPage.styles'; // 스타일 파일 불러오기

function RecordingPage() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();

  const getCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      streamRef.current = mediaStream;
    } catch (err) {
      console.error("카메라 접근 에러:", err);
      alert("카메라에 접근할 수 없습니다.");
    }
  };

  useEffect(() => {
    getCamera();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleStopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    navigate('/after-record');
  };

  return (
    <Layout headerType="analysis">
      <S.ContentContainer>
        <S.VideoContainer>
          <S.UserVideoWrapper>
            <S.LiveVideo ref={videoRef} autoPlay playsInline />
          </S.UserVideoWrapper>
          <S.AvatarVideoWrapper>
            <p>아바타 영상 화면</p>
          </S.AvatarVideoWrapper>
        </S.VideoContainer>

        <S.EndChatButtonWrapper>
          <Button onClick={handleStopCamera} imageSrc={endChatIcon} altText="채팅 종료" />
        </S.EndChatButtonWrapper>
      </S.ContentContainer>
    </Layout>
  );
}

export default RecordingPage;