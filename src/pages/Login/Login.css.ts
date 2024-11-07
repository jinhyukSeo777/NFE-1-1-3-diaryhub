import { style, globalStyle } from '@vanilla-extract/css';

export const pageContainer = style({
  width: '90%',
  maxWidth: '1000px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100vh',
  margin: '0 auto',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '1rem',
      marginTop: '6rem',
      height: 'auto',
    },
  },
});

export const welcomeSection = style({
  marginRight: '5rem',
  '@media': {
    '(max-width: 768px)': {
      marginRight: '0rem',
      margin: '4rem 0',
    },
  },
});

export const welcomeSectionSpan = style({
  fontSize: '30px',
  marginBottom: '5rem',
  display: 'block',
  '@media': {
    '(max-width: 960px)': {
      fontSize: '22px',
      marginBottom: '0rem',
    },
  },
});

export const imgSection = style({
  display: 'flex',
  '@media': {
    '(max-width: 768px)': {
      marginTop: '40px',
    },
  },
});

export const imgSectionSpan = style({
  display: 'block',
  marginBottom: '0.7rem',
  fontSize: '1.2rem',
  marginRight: '0.5rem',
  '@media': {
    '(max-width: 960px)': {
      fontSize: '1.1rem',
    },
  },
});

export const formSection = style({
  padding: '2rem',
  width: '25rem',
  minWidth: '25rem',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  '@media': {
    '(max-width: 768px)': {
      marginBottom: '2rem',
    },
  },
});

// 글로벌 스타일 설정

globalStyle(`${welcomeSection} h2`, {
  fontSize: '50px',
  marginBottom: '1.5rem',
  '@media': {
    '(max-width: 960px)': {
      fontSize: '40px',
      marginBottom: '1rem',
    },
  },
});

globalStyle(`${welcomeSection} p`, {
  marginBottom: '0.5rem',
  fontSize: '1rem',
});

globalStyle(`${welcomeSection} img`, {
  marginTop: '1rem',
  width: '200px',
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

  marginBottom: '1.5rem',
});

globalStyle(`${formSection} Button`, {
  width: '100%',

  display: 'flex',
  fontSize: '1.1rem',
  justifyContent: 'center',
});
