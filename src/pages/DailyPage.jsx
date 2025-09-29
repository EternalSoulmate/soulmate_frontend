// src/pages/DailyPage.jsx
import Layout from '../components/Layout';
import joyIcon from '../assets/emotions/joy.png';
import * as S from './DailyPage.styles'; // 스타일 파일 불러오기

function DailyPage() {
  return (
    <Layout headerType="daily">
      <S.PageContainer>
        <S.DailyRecordBox>
          
          <S.EmotionIcon src={joyIcon} alt="대표 감정" />

          <S.ContentArea>
            <h3>감정 그래프</h3>
            <S.GraphPlaceholder>
              {/* 그래프가 들어갈 임시 박스 */}
            </S.GraphPlaceholder>
          </S.ContentArea>
          
          <S.ContentArea>
            <h3>주요 감정 요인</h3>
            <p>오늘의 주요 감정 요인은...</p>
          </S.ContentArea>

          <S.ContentArea>
            <h3>감정 일기</h3>
            <p>오늘 하루는 정말 즐거웠다. 아침에 일어나니 날씨가 너무 좋았고...</p>
          </S.ContentArea>

        </S.DailyRecordBox>
      </S.PageContainer>
    </Layout>
  );
}

export default DailyPage;