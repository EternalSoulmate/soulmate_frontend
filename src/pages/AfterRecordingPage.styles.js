// src/pages/AfterRecordingPage.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f8f8f8;
  color: #333;
`;

export const ContentContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const LoadingText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #555;
  margin-top: 20px;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: #e74c3c;
  margin-top: 20px;
`;

export const DiaryCard = styled.div`
  margin-top: 30px;
  text-align: left;
`;

export const DiaryHeader = styled.h2`
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 10px;
`;

export const DiaryDate = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin-bottom: 20px;
`;

export const DiaryContent = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #34495e;
  margin-bottom: 25px;
  background-color: #ecf0f1;
  padding: 15px;
  border-radius: 8px;
`;

export const AdviceContent = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #27ae60;
  font-style: italic;
  margin-bottom: 25px;
  background-color: #e8f8f5;
  padding: 15px;
  border-left: 5px solid #2ecc71;
  border-radius: 8px;
`;

export const EmotionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 25px;
  justify-content: center;
`;

export const EmotionItem = styled.div`
  background-color: #f39c12;
  color: #fff;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
`;

export const EmotionBadge = styled.span`
  background-color: #3498db;
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  margin-left: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  align-items: center;
`;

export const DiaryButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  &:hover {
    background-color: #0056b3;
  }
  img {
    width: 100%;
  }
`;

// 새로 추가될 "일기 다시 쓰기" 버튼
export const RetryRecordingButton = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  margin-top: 15px; // DiaryButton 아래에 위치
  &:hover {
    background-color: #5a6268;
  }
`;