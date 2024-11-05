import { globalStyle, style } from '@vanilla-extract/css';
import { g3 } from '../../../../utils/color';

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

// Textarea 스타일
export const textarea = style({
  width: '100%',
  outline: 'none',
  padding: '0.5rem',
  border: `1px solid ${g3}`,
  borderRadius: '0.5rem',
  fontSize: '1rem',
  height: '20rem',
  resize: 'none',
  fontFamily: 'HakgyoansimGeurimilgi',
});

// Webkit 스크롤바 스타일링
globalStyle(`${textarea}::-webkit-scrollbar`, {
  width: '6px',
  height: '6px',
});
globalStyle(`${textarea}::-webkit-scrollbar-track`, {
  background: '#f1f1f1',
  borderRadius: '10px',
});
globalStyle(`${textarea}::-webkit-scrollbar-thumb`, {
  background: `${g3}`,
  borderRadius: '10px',
  cursor: 'pointer',
});
globalStyle(`${textarea}::-webkit-scrollbar-thumb:hover`, {
  background: `#C0C0C0`,
});
