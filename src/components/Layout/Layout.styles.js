// src/components/Layout/Layout.styles.js
import styled from 'styled-components';

export const Background = styled.div`
  min-height: 100vh;
  background-color: #f0f2f5; /* 바깥 배경색 (선택 사항) */
  display: flex;
  justify-content: center; /* 자식 요소를 가로 중앙에 배치 */
  padding: 20px 0; /* 위아래 여유 공간 */
`;

// 2. 앱 전체를 감싸는 393px 너비의 흰색 컨테이너를 만듭니다. (스케치북 역할)
export const AppContainer = styled.div`
  width: 393px;
  min-height: 852px;
  background-color: white;
  position: relative; /* 내부 요소들의 위치 기준점 */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* 그림자 효과 (선택 사항) */
`;

// 3. 헤더 높이만큼 여백을 주는 콘텐츠 영역
export const Content = styled.main`
  padding-top: 90px; /* 헤더 높이 */
`;