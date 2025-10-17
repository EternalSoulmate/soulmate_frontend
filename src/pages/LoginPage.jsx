// src/pages/LoginPage.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './LoginPage.styles';

import titleLogo from '../assets/icons/soulmate_big.svg';
import avatar from '../assets/icons/avatar.svg';

function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!id || !pw) {
      setError('아이디와 비밀번호를 모두 입력하세요.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://soulmate.kro.kr/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider: 'email',
          email: id,
          password: pw,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || '로그인에 실패했습니다.');
      }

      if (result.accessToken) {
        localStorage.setItem('token', result.accessToken);
        alert('로그인 성공!');
        navigate('/');
      } else {
        throw new Error('로그인에 실패했습니다. 토큰을 받지 못했습니다.');
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.PageContainer>
      <S.TopContent>
        <S.Title src={titleLogo} alt="SOUL MATE" />
      </S.TopContent>

      {/* --- ↓↓↓ 아바타를 TopContent 밖으로 빼내어 독립적으로 배치합니다 ↓↓↓ --- */}
      <S.Avatar src={avatar} alt="아바타" />

      <S.BottomSheet onSubmit={handleLogin}>
        <S.InputWrapper>
          <S.Label htmlFor="id">ID</S.Label>
          <S.Input id="id" type="email" value={id} onChange={(e) => setId(e.target.value)} />
        </S.InputWrapper>
        
        <S.InputWrapper>
          <S.Label htmlFor="pw">PW</S.Label>
          <S.Input id="pw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
        </S.InputWrapper>

        {error && <S.ErrorText>{error}</S.ErrorText>}

        <S.LoginButton type="submit" disabled={isLoading}>
          {isLoading ? '로그인 중...' : '로그인'}
        </S.LoginButton>

        <Link to="/join">
          <S.EmailStartLink>
            이메일로 시작하기
          </S.EmailStartLink>
        </Link>
      </S.BottomSheet>
    </S.PageContainer>
  );
}

export default LoginPage;