// src/pages/SearchPage.jsx
import Layout from '../components/Layout';
import * as S from './SearchPage.styles'; // 스타일 파일 불러오기

function SearchPage() {
  return (
    <Layout headerType="analysis">
      <S.PageContainer>
        <h1>검색 페이지</h1>
        <p>검색창과 결과가 여기에 표시됩니다.</p>
      </S.PageContainer>
    </Layout>
  );
}

export default SearchPage;