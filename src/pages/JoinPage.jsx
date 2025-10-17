// src/pages/JoinPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './JoinPage.styles';

import logoSmall from '../assets/icons/soulmate_small.svg';
import verificateButton from '../assets/buttons/verificatebutton.svg';
import checkButton from '../assets/buttons/checkbutton.svg';
import joinButton from '../assets/buttons/joinbutton.svg';

function JoinPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // '인증' 버튼: 이메일 인증번호 요청
  const handleVerificationRequest = async () => {
    if (!email) return alert('이메일 주소를 입력하세요.');
    try {
      const response = await fetch(`https://soulmate.kro.kr/users/email?email=${email}`, {
        method: 'GET',
      });
      if (!response.ok) throw new Error('인증번호 요청에 실패했습니다.');
      alert('이메일로 인증번호가 발송되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  // '확인' 버튼: 인증번호 확인
  const handleCodeConfirmation = async () => {
    if (!authCode) return alert('인증번호를 입력하세요.');
    try {
      const response = await fetch(`https://soulmate.kro.kr/users/email?email=${email}&verificationCode=${authCode}`, {
        method: 'POST',
      });
       if (!response.ok) throw new Error('인증번호가 일치하지 않습니다.');
      setIsEmailVerified(true);
      setEmailError('');
      alert('이메일 인증에 성공했습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  // '회원가입' 버튼: 최종 정보 전송
  const handleJoin = async (e) => {
    e.preventDefault();
    setUsernameError(''); setEmailError(''); setPasswordError('');
    
    if (!username) return setUsernameError('사용자 이름을 입력하세요.');
    if (!isEmailVerified) return setEmailError('이메일 인증을 완료해 주세요.');
    if (!password) return setPasswordError('비밀번호를 입력하세요.');
    if (password !== passwordConfirm) return setPasswordError('비밀번호가 일치하지 않습니다.');

    try {
      const response = await fetch('https://soulmate.kro.kr/users/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          name: username,
          password: password,
        }),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || '회원가입에 실패했습니다.');
      }
      alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <S.PageContainer>
      <S.Logo src={logoSmall} alt="SOUL MATE" />
      <S.JoinForm onSubmit={handleJoin}>
        
        <S.FormGroup>
          <S.Label htmlFor="username">사용자 이름</S.Label>
          <S.Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          {usernameError && <S.ErrorText>{usernameError}</S.ErrorText>}
        </S.FormGroup>
        
        <S.FormGroup>
          <S.Label htmlFor="email">이메일 주소</S.Label>
          <S.InputRow>
            <S.Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isEmailVerified} />
            <S.ActionButton type="button" onClick={handleVerificationRequest}>
              <img src={verificateButton} alt="인증" />
            </S.ActionButton>
          </S.InputRow>
          {emailError && <S.ErrorText>{emailError}</S.ErrorText>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="authCode">인증번호 입력</S.Label>
          <S.InputRow>
            <S.Input id="authCode" type="text" value={authCode} onChange={(e) => setAuthCode(e.target.value)} />
            <S.ActionButton type="button" onClick={handleCodeConfirmation}>
              <img src={checkButton} alt="확인" />
            </S.ActionButton>
          </S.InputRow>
          {isEmailVerified && <S.StatusText>인증된 주소입니다.</S.StatusText>}
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <S.Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </S.FormGroup>

        <S.FormGroup>
          <S.Label htmlFor="passwordConfirm">비밀번호 재입력</S.Label>
          <S.Input id="passwordConfirm" type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
          {passwordError && <S.ErrorText>{passwordError}</S.ErrorText>}
        </S.FormGroup>

        <S.JoinButtonWrapper>
          <S.ActionButton type="submit">
            <img src={joinButton} alt="회원가입" />
          </S.ActionButton>
        </S.JoinButtonWrapper>
      </S.JoinForm>
    </S.PageContainer>
  );
}

export default JoinPage;