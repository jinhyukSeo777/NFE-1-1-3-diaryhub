import { style } from '@vanilla-extract/css';

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

export const weatherarea = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});
