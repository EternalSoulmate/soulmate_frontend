// src/pages/AfterRecordPage.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 917px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmotionIconLink = styled(Link)`
  position: absolute;
  left: 174px;
  top: 300px;
  width: 150px;
  height: 152px;
`;

export const EmotionIconImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ActionArea = styled.div`
  position: absolute;
  top: 500px;
  text-align: center;
`;