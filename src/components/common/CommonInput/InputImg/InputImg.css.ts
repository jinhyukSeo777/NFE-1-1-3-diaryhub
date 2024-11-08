import { globalStyle, style } from '@vanilla-extract/css';
import { g3, g4 } from '@constants/color';

// Container 스타일
export const container = style({
  width: '100%',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '0.5rem',
  marginBottom: '2rem',
});

// Span 스타일
export const span = style({
  fontSize: '1.8rem',
  display: 'block',
  marginBottom: '1rem',
  fontFamily: 'HakgyoansimGeurimilgi',
});

export const imagesarea = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  overflowX: 'auto',
  paddingBottom: '0.5rem',
});

// Webkit 스크롤바 스타일링
globalStyle(`${imagesarea}::-webkit-scrollbar`, {
  width: '8px',
  height: '8px',
});
globalStyle(`${imagesarea}::-webkit-scrollbar-track`, {
  background: '#f1f1f1',
  borderRadius: '10px',
});
globalStyle(`${imagesarea}::-webkit-scrollbar-thumb`, {
  background: `${g3}`,
  borderRadius: '10px',
  cursor: 'pointer',
});
globalStyle(`${imagesarea}::-webkit-scrollbar-thumb:hover`, {
  background: `#C0C0C0`,
});

export const image = style({
  width: '150px',
  height: '150px',
  marginRight: '0.5rem',
  borderRadius: '0.5rem',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  cursor: 'pointer',
  flexShrink: '0', // Hover 효과: 삭제 아이콘 및 스타일 변경
  position: 'relative',

  selectors: {
    '&:hover::after': {
      content: `'삭제'`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      textAlign: 'center',
      zIndex: 1,
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
});

export const input = style({
  width: '150px',
  height: '150px',
  backgroundColor: `${g4}`,
  borderRadius: '0.5rem',
  border: 'none',
  cursor: 'pointer',
  flexShrink: '0',
});
