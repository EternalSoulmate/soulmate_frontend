// src/pages/MainPage.jsx
import { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import * as S from './MainPage.styles'; // 스타일 파일 불러오기

// 아이콘 import 부분
import joyIcon from '../assets/emotions/joy.png';
import sadnessIcon from '../assets/emotions/sadness.png';
import angerIcon from '../assets/emotions/anger.png';
import startRecordIcon from '../assets/buttons/start_record.svg';
import viewDiaryIcon from '../assets/buttons/view_diary.svg';
import editDiaryIcon from '../assets/buttons/edit_diary.svg';

// 아이콘 파일명을 객체에 매핑
const emotionIcons = {
  joy: joyIcon,
  sadness: sadnessIcon,
  anger: angerIcon,
};

// 주(week) 단위로 묶은 가짜 달력 데이터
const dummyCalendarData = [
  // 1주차 (9월 1일은 월요일 시작)
  [
    { day: null, emotion: null }, { day: 1, emotion: 'joy' }, { day: 2, emotion: null },
    { day: 3, emotion: 'sadness' }, { day: 4, emotion: 'anger' }, { day: 5, emotion: null },
    { day: 6, emotion: null },
  ],
  // 2주차
  [
    { day: 7, emotion: 'joy' }, { day: 8, emotion: null }, { day: 9, emotion: 'joy' },
    { day: 10, emotion: 'anger' }, { day: 11, emotion: 'sadness' }, { day: 12, emotion: null },
    { day: 13, emotion: null },
  ],
  // 3주차
  [
    { day: 14, emotion: null }, { day: 15, emotion: 'joy' }, { day: 16, emotion: null },
    { day: 17, emotion: 'anger' }, { day: 18, emotion: null }, { day: 19, emotion: 'joy' },
    { day: 20, emotion: null },
  ],
  // 4주차
  [
      { day: 21, emotion: 'sadness' }, { day: 22, emotion: null }, { day: 23, emotion: 'joy' },
      { day: 24, emotion: null }, { day: 25, emotion: 'anger' }, { day: 26, emotion: null },
      { day: 27, emotion: null },
  ],
  // 5주차
  [
      { day: 28, emotion: 'joy' }, { day: 29, emotion: 'sadness' }, { day: 30, emotion: null },
      { day: null, emotion: null }, { day: null, emotion: null }, { day: null, emotion: null },
      { day: null, emotion: null },
  ],
];

function MainPage() {
  const [boxType, setBoxType] = useState('none');
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (dayData) => {
    if (!dayData.day) return;
    setSelectedDay(dayData.day);
    if (dayData.emotion) {
      setBoxType('summary');
    } else {
      setBoxType('record');
    }
  };

  return (
    <Layout headerType="main">
      <S.PageContainer>
        <S.CalendarContainer>
          <h2>2025년 9월</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {dummyCalendarData.map((week, weekIndex) => (
              <S.WeekContainer key={weekIndex}>
                {week.map((dayData, dayIndex) => (
                  <S.DayCell
                    key={dayIndex}
                    $isSelected={selectedDay === dayData.day}
                    $isEmpty={!dayData.day}
                    onClick={() => handleDayClick(dayData)}
                  >
                    {dayData.emotion ? (
                      <S.EmotionIcon src={emotionIcons[dayData.emotion]} alt={dayData.emotion} />
                    ) : (
                      <span>{dayData.day}</span>
                    )}
                  </S.DayCell>
                ))}
              </S.WeekContainer>
            ))}
          </div>
        </S.CalendarContainer>

      </S.PageContainer>
      
      {boxType === 'summary' && (
        <S.BottomBox>
          <S.BottomBoxContent>
            <h3>감정 변화 요약 박스 (선택된 날짜: {selectedDay}일)</h3>
            <S.ViewDiaryButtonLink to="/daily">
              <Button imageSrc={viewDiaryIcon} altText="일기 보기" />
            </S.ViewDiaryButtonLink>
            <S.EditDiaryButtonLink to="/edit-diary">
              <Button imageSrc={editDiaryIcon} altText="일기 수정" />
            </S.EditDiaryButtonLink>
          </S.BottomBoxContent>
        </S.BottomBox>
      )}
      
      {boxType === 'record' && (
        <S.BottomBox>
          <S.BottomBoxContent>
            <h3>기록 시작 (선택된 날짜: {selectedDay}일)</h3>
            <S.StartRecordButtonLink to="/before-record">
              <Button imageSrc={startRecordIcon} altText="기록 시작" />
            </S.StartRecordButtonLink>
          </S.BottomBoxContent>
        </S.BottomBox>
      )}
    </Layout>
  );
}

export default MainPage;