// src/pages/MenuPage.styles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  width: 498px;
  min-height: 1080px;
  margin: 0 auto;
  background-color: white;
  position: relative;
`;

export const LeftHomeButtonLink = styled(Link)`
  position: absolute;
  left: 19px;
  top: 91px;
`;

export const Logo = styled.img`
  position: absolute;
  left: 159px;
  top: 103px;
  width: 180px;
  height: 35px;
`;

export const RightSearchButtonLink = styled(Link)`
  position: absolute;
  left: 421px;
  top: 91px;
`;

export const ContentContainer = styled.div`
  padding-top: 163px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 24px;
  line-height: 2.5;
`;