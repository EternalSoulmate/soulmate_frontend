// src/pages/LoginPage.jsx
import logoDark from '../assets/icons/logo_dark.svg';
import avatar from '../assets/icons/avatar.svg';
import kakaoButton from '../assets/buttons/start_kakao.svg';
import naverButton from '../assets/buttons/start_naver.svg';
import googleButton from '../assets/buttons/start_google.svg';
import * as S from './LoginPage.styles'; // 스타일 파일 불러오기

function LoginPage() {
  return (
    <S.Wrapper> 
      <S.PageContainer>
        <S.Logo src={logoDark} alt="다크 로고" />
        <S.Avatar src={avatar} alt="아바타" />
        
        <S.BottomSheet>
          <S.SocialButton src={kakaoButton} alt="카카오로 시작하기" />
          <S.SocialButton src={naverButton} alt="네이버로 시작하기" />
          <S.SocialButton src={googleButton} alt="구글로 시작하기" />
        </S.BottomSheet>
      </S.PageContainer>
    </S.Wrapper>
  );
}

export default LoginPage;