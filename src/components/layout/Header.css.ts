import { style } from '@vanilla-extract/css';
import { DESKTOP } from '../../utils/size';
import { g1, g2, g3 } from '../../utils/color';

export const headerStyle = style({
  width: '100%',
  height: '5rem',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 1px 15px 2px rgba(0, 0, 0, 0.05)',
  zIndex: '999',
  backgroundColor: 'white',
});

export const headerArea = style({
  maxWidth: DESKTOP,
  width: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logoContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
});

export const logoImageStyle = style({
  width: '45px', // 로고 이미지 크기
  height: '45px',
  marginRight: '0.5rem',
});

export const h1Style = style({
  fontFamily: "'HakgyoansimNadeuri', sans-serif", // 폰트 적용
  fontWeight: 'bold',
  fontSize: '1.8rem',
  margin: 0,
});

export const navStyle = style({
  display: 'flex',
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
  gap: '1.2rem',
  position: 'absolute',
  top: '4rem',
  right: '2rem',
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  padding: '1rem 2.5rem',
  zIndex: 1,
  '@media': {
    '(max-width: 768px)': {
      display: 'flex', // 모바일에서만 표시
    },
  },
});

export const hamburgerButtonStyle = style({
  display: 'none',
  fontSize: '2rem',
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
});

export const liStyle = style({
  marginLeft: '2rem',
});

export const linkStyle = style({
  textDecoration: 'none',
  color: g1,
  fontWeight: 'bold',
  paddingBottom: '0.5rem',
  borderBottom: '2px solid white',
  selectors: {
    '&:hover': {
      borderBottom: `2px solid ${g2}`,
    },
  },
});
