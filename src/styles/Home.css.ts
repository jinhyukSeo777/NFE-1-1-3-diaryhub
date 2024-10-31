import { style } from '@vanilla-extract/css';
import { DESKTOP } from '../utils/size';

export const home = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: DESKTOP,
  gap: '20px',
  margin: '0 auto',
});

export const article = style({
  padding: 20,
  flexBasis: '40%',
  boxSizing: 'border-box',
});

export const map = style({
  padding: 20,
  flexBasis: '60%',
  boxSizing: 'border-box',
  '@media': {
    '(max-width: 950px)': {
      display: 'none',
    },
  },
});
