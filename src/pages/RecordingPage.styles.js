// src/pages/RecordingPage.styles.js
import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 917px;
`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 498px;
  height: 698px;
  display: flex;
  flex-direction: column;
`;

export const UserVideoWrapper = styled.div`
  flex: 1;
  background-color: #000;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvatarVideoWrapper = styled.div`
  flex: 1;
  background-color: #222;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LiveVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EndChatButtonWrapper = styled.div`
  position: absolute;
  left: 201px;
  top: 751px;
  width: 95px;
  height: 94px;
`;