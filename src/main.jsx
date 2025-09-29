// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// 페이지 컴포넌트들을 모두 불러옵니다.
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DailyPage from './pages/DailyPage';
import MenuPage from './pages/MenuPage';
import BeforeRecordPage from './pages/BeforeRecordPage';
import RecordingPage from './pages/RecordingPage';
import AfterRecordPage from './pages/AfterRecordPage';
import DiaryPage from './pages/DiaryPage';
import AnalysisPage from './pages/AnalysisPage';
import SearchPage from './pages/SearchPage';
import EditDiaryPage from './pages/EditDiaryPage';

// 라우터 설정 (페이지 경로 연결)
const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/", element: <MainPage /> },
  { path: "/daily/:date", element: <DailyPage /> }, // URL에 날짜를 포함하는 경로
  { path: "/daily", element: <DailyPage /> }, // 날짜가 없는 기본 경로도 추가
  { path: "/menu", element: <MenuPage /> },
  { path: "/before-record", element: <BeforeRecordPage /> },
  { path: "/recording", element: <RecordingPage /> },
  { path: "/after-record", element: <AfterRecordPage /> },
  { path: "/diary", element: <DiaryPage /> },
  { path: "/analysis", element: <AnalysisPage /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/edit-diary", element: <EditDiaryPage /> },
]);

// 최종 렌더링
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);