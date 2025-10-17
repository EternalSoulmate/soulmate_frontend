// src/pages/DayPage.styles.js
import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;

export const DateControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
`;

export const DateText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

export const MainEmotionIcon = styled.img`
  width: 55px;
  height: 55px;
  margin-top: 10px;
`;

export const SectionContainer = styled.div`
  width: 345px;
  margin-top: 44px;
`;

export const SectionTitleIcon = styled.img`
  height: 24px;
  width: auto;
  display: block;
  margin-bottom: 15px;
`;

export const ContentBox = styled.div`
  background-color: #F6F6F8;
  border-radius: 13px;
  width: 100%;
  min-height: 120px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: #555;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 20px; /* 각 요인 사이의 간격 */
  }
`;

// --- ↓↓↓ 감정 요인 목록을 위한 스타일 추가 ↓↓↓ ---
export const FactorListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const FactorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* 아이콘과 이름 사이 간격 */
  margin-bottom: 5px;
`;

export const FactorIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const FactorEmotionName = styled.span`
  font-weight: bold;
  font-size: 15px;
  color: #333;
`;

export const FactorCause = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
  padding-left: 32px; /* 아이콘 너비 + 간격 만큼 들여쓰기 */
`;
// --- ↑↑↑ 여기까지 ---