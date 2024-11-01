import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  backgroundColor: '#f8f9fa',
  padding: '1rem 2rem', // 여백 추가
  borderBottom: '1px solid #ccc', // 밑줄 추가
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logoContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
});

export const logoImageStyle = style({
  width: '40px', // 로고 이미지 크기
  height: '40px',
  marginRight: '0.5rem',
});

export const h1Style = style({
  fontFamily: "'HakgyoansimNadeuri', sans-serif", // 폰트 적용
  fontWeight: 700,
  fontSize: '1.5rem',
  margin: 0,
});

export const navStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '@media': {
    '(max-width: 768px)': {
      display: 'none', // 모바일에서 기본 네비게이션 숨김
    },
  },
});
export const mobileMenuStyle = style({
  display: 'none', // 기본적으로 숨김
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  position: 'absolute',
  top: '60px',
  right: '20px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '1rem',
  zIndex: 1,
  '@media': {
    '(max-width: 768px)': {
      display: 'flex', // 모바일에서만 표시
    },
  },
});

export const hamburgerButtonStyle = style({
  display: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  '@media': {
    '(max-width: 768px)': {
      display: 'block', // 모바일에서만 표시
    },
  },
});

export const ulStyle = style({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  paddingRight: '8px',
  gap: '16px',
});

export const liStyle = style({
  marginRight: '2rem',
});

export const linkStyle = style({
  textDecoration: 'none',
  color: '#000',
  fontWeight: 'bold',
});
