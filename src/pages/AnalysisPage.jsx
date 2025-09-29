// src/pages/AnalysisPage.jsx
import Layout from '../components/Layout';
import viewGraphIcon from '../assets/icons/graph.svg';
import viewFactorsIcon from '../assets/icons/factors.svg';
import viewAdviceIcon from '../assets/icons/advice.svg';

import * as S from './AnalysisPage.styles'; // 스타일 파일 불러오기

function AnalysisPage() {
  return (
    <Layout headerType="analysis">
      <S.PageContainer>
        <S.UnitContainer>
          <S.TitleIcon src={viewGraphIcon} alt="감정 그래프 아이콘" />
          <S.Box>
            <p>여기에 나중에 감정 변화 그래프가 들어옵니다.</p>
          </S.Box>
        </S.UnitContainer>

        <S.UnitContainer>
          <S.TitleIcon src={viewFactorsIcon} alt="주요 감정 요인 아이콘" />
          <S.Box>
            <p>여기에 AI가 분석한 주요 감정 요인이 표시됩니다.</p>
          </S.Box>
        </S.UnitContainer>

        <S.UnitContainer>
          <S.TitleIcon src={viewAdviceIcon} alt="소울메이트의 조언 아이콘" />
          <S.Box>
            <p>여기에 조언 텍스트가 표시됩니다.</p>
          </S.Box>
        </S.UnitContainer>
      </S.PageContainer>
    </Layout>
  );
}

export default AnalysisPage;