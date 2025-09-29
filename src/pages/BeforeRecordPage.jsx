// src/pages/BeforeRecordPage.jsx
import Layout from '../components/Layout';
import Button from '../components/Button';
import avatarIcon from '../assets/icons/avatar.svg';
import startChatIcon from '../assets/buttons/start_chat.svg';
import * as S from './BeforeRecordPage.styles'; // 스타일 파일 불러오기

function BeforeRecordPage() {
  return (
    <Layout headerType="analysis">
      <S.ContentContainer>
        <S.AvatarImage src={avatarIcon} alt="아바타" />
        
        <S.ChatButtonLink to="/recording">
          <Button imageSrc={startChatIcon} altText="채팅 시작" />
        </S.ChatButtonLink>
      </S.ContentContainer>
    </Layout>
  );
}

export default BeforeRecordPage;