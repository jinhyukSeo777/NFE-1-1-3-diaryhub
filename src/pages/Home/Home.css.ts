import { style } from '@vanilla-extract/css';
import { DESKTOP } from '../../utils/size';

export const home = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: DESKTOP,
  gap: 20,
  margin: '0 auto',
  padding: 20,
});

export const article = style({
  flexBasis: '40%',
  boxSizing: 'border-box',
});

export const map = style({
  flexBasis: '60%',
  boxSizing: 'border-box',
  '@media': {
    '(max-width: 950px)': {
      display: 'none',
    },
  },
});
