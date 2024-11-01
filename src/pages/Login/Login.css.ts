import { style, globalStyle } from '@vanilla-extract/css';

export const pageContainer = style({
  display: 'flex',

  alignItems: 'center',

  justifyContent: 'center',

  height: ' 90vh',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      padding: '1rem',
    },
  },
});

export const welcomeSection = style({
  width: '30%',

  textAlign: 'center',

  marginRight: '2rem',
  '@media': {
    '(max-width: 768px)': {
      width: '100%',
      height: '25%',
      marginTop: '32px',
      marginBottom: '32px',
    },
  },
});

export const imgSection = style({
  display: 'flex',

  alignItems: 'center',

  textAlign: 'center',

  justifyContent: 'center',
  '@media': {
    '(max-width: 768px)': {
      marginTop: '40px',
    },
  },
});

export const formSection = style({
  flex: 1,

  padding: '2rem',

  maxWidth: '410px',

  borderRadius: '8px',

  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  '@media': {
    '(max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      width: '100%',
      marginBottom: '32px',
    },
  },
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
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
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
