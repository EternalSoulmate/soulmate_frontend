// src/pages/EditDiaryPage.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const EditBox = styled.div`
  background-color: #F6F6F8;
  border-radius: 13px;
  width: 443px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Section = styled.div`
  margin-bottom: 25px;
`;

export const DiaryTextarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  box-sizing: border-box;
`;

export const IconInText = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 0 5px;
`;

export const SaveDiaryButtonLink = styled(Link)`
  position: absolute;
  bottom: 60px;
  left: 25.5px;
  width: 447px;
  height: 65px;
`;

export const GraphPlaceholder = styled.div`
  width: 100%;
  height: 150px;
  background-color: #e0e0e0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 150px;
`;