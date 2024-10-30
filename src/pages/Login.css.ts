import { style, globalStyle } from '@vanilla-extract/css';

export const pageContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: ' 90vh',
});

export const welcomeSection = style({
  width: '30%',
  textAlign: 'center',
  marginRight: '2rem',
});

export const imgSection = style({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
});

export const formSection = style({
  flex: 1,
  padding: '2rem',
  maxWidth: '410px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
});

// 글로벌 스타일 설정
globalStyle(`${welcomeSection} h1`, {
  fontSize: '36px',
  marginBottom: '1rem',
});

globalStyle(`${welcomeSection} p`, {
  marginBottom: '0.5rem',
  fontSize: '1rem',
  color: '#333',
});

globalStyle(`${welcomeSection} img`, {
  marginTop: '1rem',
  width: '150px',
  height: '150px',
});

globalStyle(`${formSection} h2`, {
  fontSize: '1.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
});
globalStyle(`${formSection} input`, {
  width: '100%',
  marginBottom: '1rem',
});

globalStyle(`${formSection} Button`, {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});
