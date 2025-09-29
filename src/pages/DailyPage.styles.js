// src/pages/DailyPage.styles.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const DailyRecordBox = styled.div`
  background-color: #F6F6F8;
  border-radius: 13px;
  width: 443px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const EmotionIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const ContentArea = styled.div`
  width: 100%;
`;

export const GraphPlaceholder = styled.div`
  width: 100%;
  height: 150px;
  background-color: #e0e0e0;
`;