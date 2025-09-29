// src/components/Header.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

import menuOffIcon from '../assets/buttons/menu.svg';
import menuOnIcon from '../assets/buttons/menu_on.svg';
import searchOffIcon from '../assets/buttons/search.svg';
import searchOnIcon from '../assets/buttons/search_on.svg';
import homeOffIcon from '../assets/buttons/home.svg';
import homeOnIcon from '../assets/buttons/home_on.svg';
import logoImage from '../assets/icons/logo.svg';

function Header({ type = 'main' }) {
  const [activeButton, setActiveButton] = useState(null);
  
  let leftButton, rightButton;

  // --- 버튼 정의 ---
  const menuButton = (
    <Link to="/menu">
      <Button onClick={() => setActiveButton('menu')} imageSrc={activeButton === 'menu' ? menuOnIcon : menuOffIcon} altText="메뉴 버튼" />
    </Link>
  );

  const homeButton = (
    <Link to="/">
      <Button onClick={() => setActiveButton('home')} imageSrc={activeButton === 'home' ? homeOnIcon : homeOffIcon} altText="홈 버튼" />
    </Link>
  );

  const searchButton = (
    <Link to="/search">
      <Button onClick={() => setActiveButton('search')} imageSrc={activeButton === 'search' ? searchOnIcon : searchOffIcon} altText="검색 버튼" />
    </Link>
  );
  
  // --- type에 따른 버튼 할당 ---
  if (type === 'daily') {
    // 하루, 편집 페이지: 왼쪽 홈 | 오른쪽 검색
    leftButton = homeButton;
    rightButton = searchButton;
  } else if (type === 'analysis') {
    // 분석, 녹화전/중/후, 일기, 검색 페이지: 왼쪽 메뉴 | 오른쪽 홈
    leftButton = menuButton;
    rightButton = homeButton;
  } else { 
    // 기본 'main' 타입: 왼쪽 메뉴 | 오른쪽 검색
    leftButton = menuButton;
    rightButton = searchButton;
  }
  
  const headerStyle = {
    height: '163px',
    backgroundColor: '#AAD786',
    position: 'relative',
  };

  const menuStyle = {
    position: 'absolute',
    left: '19px',
    top: '91px',
  };

  const logoStyle = {
    position: 'absolute',
    left: '159px',
    top: '103px',
    width: '180px',
    height: '35px',
  };

  const rightButtonStyle = {
    position: 'absolute',
    left: '421px',
    top: '91px',
  };

  return (
    <div style={headerStyle}>
      <div style={menuStyle}>
        {leftButton}
      </div>
      <div style={logoStyle}>
        <Link to="/">
          <img src={logoImage} alt="사이트 로고" style={{width: '100%', height: '100%'}} />
        </Link>
      </div>
      <div style={rightButtonStyle}>
        {rightButton}
      </div>
    </div>
  );
}

export default Header;