// src/pages/MenuPage.jsx
import Button from '../components/Button';
import logoDark from '../assets/icons/logo_dark.svg';
import homeOnIcon from '../assets/buttons/home_on.svg';
import searchIcon from '../assets/buttons/search_on.svg';
import * as S from './MenuPage.styles'; // 스타일 파일 불러오기

function MenuPage() {
  return (
    <S.PageContainer>
      <S.LeftHomeButtonLink to="/">
        <Button imageSrc={homeOnIcon} altText="홈으로 가기" />
      </S.LeftHomeButtonLink>

      <S.Logo src={logoDark} alt="다크 로고" />

      <S.RightSearchButtonLink to="/search">
        <Button imageSrc={searchIcon} altText="검색하기" />
      </S.RightSearchButtonLink>

      <S.ContentContainer>
        <h2>메뉴</h2>
        <p>여기에 메뉴 항목(링크)들이 들어옵니다.</p>
        <S.MenuList>
          <li><S.MenuList.Link to="/daily">나의 기록</S.MenuList.Link></li>
          <li><S.MenuList.Link to="/analysis">분석 결과</S.MenuList.Link></li>
          <li>로그아웃</li>
        </S.MenuList>
      </S.ContentContainer>
    </S.PageContainer>
  );
}

export default MenuPage;