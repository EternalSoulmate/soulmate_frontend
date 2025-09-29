// src/components/Layout.jsx

import Header from './Header';

function Layout({ children, headerType }) {
  const layoutStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  };

  const containerStyle = {
    width: '498px',
    minHeight: '100vh',
    backgroundColor: 'white',
    position: 'relative',
  };

  const headerContainerStyle = {
    width: '498px',
    height: '163px',
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
  };
  
  const mainStyle = {
    paddingTop: '163px',
  };

  return (
    <div style={layoutStyle}>
      <div style={containerStyle}>
        <div style={headerContainerStyle}>
          <Header type={headerType} />
        </div>
        <main style={mainStyle}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;