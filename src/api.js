// src/api.js

const BASE_URL = 'https://soulmate.kro.kr';


export const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  } else {
    console.warn('Authorization Token is missing. Redirecting to login.');
    window.location.href = '/login';
    throw new Error('인증 토큰이 없습니다.');
  }

  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: '서버와 통신에 실패했습니다.' }));
    throw new Error(errorData.message || 'API 요청에 실패했습니다.');
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  } else {
    return {};
  }
};

export const publicFetch = async (url, options = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: '서버와 통신에 실패했습니다.' }));
    throw new Error(errorData.message || 'API 요청에 실패했습니다.');
  }
  
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  } else {
    return {};
  }
};