// src/pages/EditDiaryPage.jsx
import Layout from '../components/Layout';
import Button from '../components/Button';
import joyIcon from '../assets/emotions/joy.png';
import saveDiaryIcon from '../assets/buttons/save_diary.svg';
import * as S from './EditDiaryPage.styles'; // 스타일 파일 불러오기

function EditDiaryPage() {
  return (
    <Layout headerType="daily">
      <S.ContentWrapper>
        <S.PageContainer>
          <S.EditBox>
            
            <S.Section>
              <h2>2025년 9월 18일</h2>
              <p>오늘의 대표 감정: <S.IconInText src={joyIcon} alt="기쁨" /> (기쁨)</p>
            </S.Section>

            <S.Section>
              <h3>감정 그래프</h3>
              <S.GraphPlaceholder />
            </S.Section>
            
            <S.Section>
              <h3>주요 감정 요인</h3>
              <ul>
                <li>좋은 날씨</li>
                <li>친구와의 대화</li>
              </ul>
            </S.Section>

            {/* 마지막 섹션에는 Section 컴포넌트를 사용하지 않아 하단 여백을 없앰 */}
            <div>
              <h2>감정 일기 (수정 중)</h2>
              <S.DiaryTextarea defaultValue="오늘 하루는 정말 즐거웠다. 아침에 일어나니 날씨가 너무 좋았고..."></S.DiaryTextarea>
            </div>
          
          </S.EditBox>
        </S.PageContainer>

        <S.SaveDiaryButtonLink to="/daily">
          <Button imageSrc={saveDiaryIcon} altText="일기 저장" />
        </S.SaveDiaryButtonLink>
      </S.ContentWrapper>
    </Layout>
  );
}

export default EditDiaryPage;