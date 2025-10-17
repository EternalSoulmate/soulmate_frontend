// src/pages/LoginPage.styles.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 393px;
  height: 852px;
  background-color: #ffffff;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const Title = styled.img`
  width: 250px;
`;

// --- ↓↓↓ 이 부분을 수정했습니다 ↓↓↓ ---
export const Avatar = styled.img`
  width: 160px;
  position: absolute;
  /* 하단 시트 높이(400px)를 기준으로, 아바타가 살짝 걸쳐지도록 bottom 위치 조정 */
  bottom: 400px; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 5; /* 아바타가 시트보다 한 칸 뒤에 있도록 설정 */
`;
// --- ↑↑↑ 여기까지 ---

export const BottomSheet = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
  background-color: #EBF6D8;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px;
  box-sizing: border-box;
  gap: 15px;
  z-index: 10; /* 아바타보다 한 칸 위에 있도록 설정 */
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  width: 40px;
  text-align: left;
  color: #50AB75;
`;

export const Input = styled.input`
  flex: 1;
  height: 42px;
  border: 3px solid #50AB75;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 0 15px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #AAD786;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 50px;
`;

export const EmailStartLink = styled.span`
  color: #555;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: #ff0000;
  width: 100%;
  text-align: center;
  height: 15px;
  margin-top: 5px;
`;