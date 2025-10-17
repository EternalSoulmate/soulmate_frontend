// src/components/Layout/Layout.jsx
import Header from '../Header/Header';
import * as S from './Layout.styles'; // 스타일 파일 불러오기

function Layout({ children }) {
  return (
    <S.AppContainer>
      <Header />
      <S.Content>{children}</S.Content>
    </S.AppContainer>
  );
}
export default Layout;