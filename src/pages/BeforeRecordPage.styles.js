// src/pages/BeforeRecordPage.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 917px;
`;

export const AvatarImage = styled.img`
  position: absolute;
  left: 117px;
  top: 213px;
  width: 264px;
  height: 295px;
`;

export const ChatButtonLink = styled(Link)`
  position: absolute;
  left: 202px;
  top: 657px;
  width: 95px;
  height: 94px;
`;