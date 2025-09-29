// src/pages/MainPage.styles.js
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  padding-bottom: 316px;
`;

export const CalendarContainer = styled.div`
  background-color: #F6F6F8;
  border-radius: 13px;
  width: 443px;
  padding: 20px;
  box-sizing: border-box;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WeekContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DayCell = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  background-color: transparent;

  /* 날짜가 없는 칸 */
  ${({ $isEmpty }) => $isEmpty && css`
    border: none;
    cursor: default;
  `}

  /* 선택된 날짜 */
  ${({ $isSelected }) => $isSelected && css`
    border: 2px solid #AAD786;
    background-color: #EBF6D8;
  `}
`;

export const EmotionIcon = styled.img`
  width: 80%;
  height: 80%;
`;

export const BottomBox = styled.div`
  width: 498px;
  height: 296px;
  background-color: #DDF1C0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

export const BottomBoxContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StartRecordButtonLink = styled(Link)`
  position: absolute;
  left: 204px;
  top: 103px;
  width: 90px;
  height: 90px;
`;

export const ViewDiaryButtonLink = styled(Link)`
  position: absolute;
  left: 41px;
  top: 210px;
  width: 200px;
  height: 49px;
`;

export const EditDiaryButtonLink = styled(Link)`
  position: absolute;
  left: 255px;
  top: 210px;
  width: 200px;
  height: 49px;
`;
