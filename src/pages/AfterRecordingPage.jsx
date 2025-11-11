// src/pages/AfterRecordingPage.jsx
import { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { authFetch } from '../api';
import * as S from './AfterRecordingPage.styles';
import Layout from '../components/Layout/Layout';

import diaryButtonImg from '../assets/buttons/diarybutton.svg';

function AfterRecordingPage() {
  const { date } = useParams();
  const navigate = useNavigate();

  const [recordData, setRecordData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const retryCount = useRef(0);
  const MAX_RETRIES = 10; // 최대 10번 재시도 (약 20초)
  const RETRY_INTERVAL = 2000; // 2초마다 재시도

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');

    if (!date) {
      setIsLoading(false);
      setError("날짜 정보가 없습니다.");
      return;
    }

    const fetchRecordData = async () => {
      try {
        const [year, month, day] = date.split('-');
        const data = await authFetch(`/diaries/date?year=${year}&month=${month}&date=${day}`);

        if (data && data.todayDiary) {
          setRecordData(data);
          setIsLoading(false);
        } else if (retryCount.current < MAX_RETRIES) {
          retryCount.current += 1;
          console.log(`[AfterRecordingPage] 데이터 불완전: ${retryCount.current}/${MAX_RETRIES} 재시도 중...`);
          setTimeout(fetchRecordData, RETRY_INTERVAL);
        } else {
          setError("일기 분석 시간이 초과되었거나 데이터가 불완전합니다. 다시 시도해주세요.");
          setIsLoading(false);
        }
      } catch (err) {
        if (retryCount.current < MAX_RETRIES) {
          retryCount.current += 1;
          console.error(`[AfterRecordingPage] API 호출 오류: ${err.message}. ${retryCount.current}/${MAX_RETRIES} 재시도 중...`);
          setTimeout(fetchRecordData, RETRY_INTERVAL);
        } else {
          setError(`일기 데이터를 불러오지 못했습니다: ${err.message}`);
          setIsLoading(false);
        }
      }
    };

    fetchRecordData();
  }, [date, navigate]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  const handleRetryRecording = () => {
    navigate(`/recording/${date}`);
  };

  if (isLoading) {
    return (
      <Layout>
        <S.Container>
          <S.ContentContainer>
            <S.LoadingText>일기를 분석 중입니다...</S.LoadingText>
          </S.ContentContainer>
        </S.Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <S.Container>
          <S.ContentContainer>
            <S.ErrorMessage>{error}</S.ErrorMessage>
            <S.ButtonWrapper>
              <S.RetryRecordingButton onClick={handleRetryRecording}>
                일기 다시 쓰기
              </S.RetryRecordingButton>
            </S.ButtonWrapper>
          </S.ContentContainer>
        </S.Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <S.Container>
        <S.ContentContainer>
          <S.DiaryCard>
            <S.DiaryHeader>오늘의 일기</S.DiaryHeader>
            <S.DiaryDate>{formatDate(recordData.date)}</S.DiaryDate>
            <S.EmotionList>
              {recordData.emotionData && recordData.emotionData.map((emotion, index) => (
                <S.EmotionItem key={index}>
                  {emotion.emotion} <S.EmotionBadge>{emotion.score}%</S.EmotionBadge>
                  <br />
                  {emotion.summary}
                  <br />
                  <span style={{ fontSize: '12px', color: '#eee' }}>{emotion.cause}</span>
                </S.EmotionItem>
              ))}
            </S.EmotionList>
            <S.DiaryContent>{recordData.todayDiary}</S.DiaryContent>
            <S.AdviceContent>{recordData.advice}</S.AdviceContent>
          </S.DiaryCard>
          <S.ButtonWrapper>
            <Link to="/main">
              <S.DiaryButton>
                <img src={diaryButtonImg} alt="일기보기" />
              </S.DiaryButton>
            </Link>
            {recordData && (
              <S.RetryRecordingButton onClick={handleRetryRecording}>
                일기 다시 쓰기
              </S.RetryRecordingButton>
            )}
          </S.ButtonWrapper>
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
}

export default AfterRecordingPage;