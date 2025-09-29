// src/pages/LoginPage.styles.js
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

export const PageContainer = styled.div`
  width: 498px;
  height: 1080px;
  margin: 0 auto;
  background-color: white;
  position: relative;
  overflow: hidden;
`;

export const Logo = styled.img`
  position: absolute;
  left: 104px;
  top: 146px;
  width: 291px;
  height: 56px;
`;

export const Avatar = styled.img`
  position: absolute;
  left: 138px;
  top: 346px;
  width: 222px;
  height: 233px;
`;

export const BottomSheet = styled.div`
  position: absolute;
  left: 0px;
  top: 580px;
  bottom: 0px;
  width: 498px;
  background-color: #EBF6D8;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const SocialButton = styled.img`
  width: 445px;
  height: 60px;
  cursor: pointer;
`;