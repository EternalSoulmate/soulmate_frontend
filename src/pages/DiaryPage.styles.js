// src/pages/DiaryPage.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 917px;
`;

export const EmotionIcon = styled.img`
  position: absolute;
  left: 216px;
  top: 52px;
  width: 65px;
  height: 66px;
`;

export const DiaryBox = styled.div`
  position: absolute;
  top: 137px;
  left: 27.5px;
  background-color: #F6F6F8;
  border-radius: 13px;
  width: 443px;
  padding: 20px;
  box-sizing: border-box;
  min-height: 400px;
`;

export const SaveDiaryButtonLink = styled(Link)`
  position: absolute;
  left: 25px;
  bottom: 40px;
  width: 447px;
  height: 65px;
`;