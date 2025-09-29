// src/components/Button.jsx

// 1. props로 onClick을 받아옵니다.
function Button({ imageSrc, altText, onClick }) {
  const style = {
    background: 'none',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
  };

  return (
    // 2. 받아온 onClick을 button 태그에 그대로 연결합니다.
    <button style={style} onClick={onClick}>
      <img src={imageSrc} alt={altText} style={{width: '100%', height: '100%'}} />
    </button>
  );
}

export default Button;