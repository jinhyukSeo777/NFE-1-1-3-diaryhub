import { style } from '@vanilla-extract/css';

export const mydiary = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 20,

  '@media': {
    'screen and (max-width: 1000px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const noteCon = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  gap: 20,
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  '@media': {
    '(max-width: 950px)': {
      transform: 'translateY(0%)',
      marginTop: '9rem',
    },
  },
});
