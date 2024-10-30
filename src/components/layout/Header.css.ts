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
