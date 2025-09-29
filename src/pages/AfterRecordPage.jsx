// src/pages/AfterRecordPage.jsx
import Layout from '../components/Layout';
import joyIcon from '../assets/emotions/joy.png'; 
import * as S from './AfterRecordPage.styles'; // 1. 스타일 파일 불러오기

function AfterRecordPage() {
  return (
    <Layout headerType="analysis">
      {/* 2. 기존 div들을 스타일 컴포넌트로 교체 */}
      <S.ContentContainer>
        
        <S.EmotionIconLink to="/diary">
          <S.EmotionIconImage src={joyIcon} alt="대표 감정 아이콘" />
        </S.EmotionIconLink>

        <S.ActionArea>
          <h2>녹화가 완료되었습니다.</h2>
          <p>분석 결과를 확인하거나 일기를 작성할 수 있습니다.</p>
        </S.ActionArea>

      </S.ContentContainer>
    </Layout>
  );
}

export default AfterRecordPage;