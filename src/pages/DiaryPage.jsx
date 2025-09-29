// src/pages/DiaryPage.jsx
import Layout from '../components/Layout';
import Button from '../components/Button';
import joyIcon from '../assets/emotions/joy.png';
import saveDiaryIcon from '../assets/buttons/save_diary.svg';
import * as S from './DiaryPage.styles.js'; // 스타일 파일 불러오기

function DiaryPage() {
  return (
    <Layout headerType="analysis">
      <S.ContentContainer>
        
        <S.EmotionIcon src={joyIcon} alt="대표 감정" />

        <S.DiaryBox>
          <h2>감정 일기</h2>
          <p>이곳에 일기 내용이 표시되거나, 텍스트를 입력하는 창이 들어옵니다.</p>
        </S.DiaryBox>

        <S.SaveDiaryButtonLink to="/daily">
          <Button imageSrc={saveDiaryIcon} altText="일기 저장하고 돌아가기" />
        </S.SaveDiaryButtonLink>
        
      </S.ContentContainer>
    </Layout>
  );
}

export default DiaryPage;