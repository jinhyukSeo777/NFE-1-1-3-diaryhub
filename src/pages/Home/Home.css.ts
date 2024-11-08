import { style } from '@vanilla-extract/css';
import { DESKTOP } from '../../constants/size';

export const home = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  marginTop: 10,
});

export const article = style({
  flexBasis: '40%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  height: 'calc(100vh - 300px)',
  textOverflow: 'ellipsis',
  '@media': {
    'screen and (max-width: 950px)': {
      flex: '100%',
      height: 'auto',
    },
  },
});

export const map = style({
  flexBasis: '60%',
  position: 'relative',
  height: 'calc(100vh - 300px)',
  '@media': {
    '(max-width: 950px)': {
      display: 'none',
    },
  },
});

export const homeCon = style({
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: DESKTOP,
  margin: '0 auto',
  width: '90%',
  '@media': {
    '(max-width: 950px)': {
      width: 'auto',
      display: ' inline-block',
    },
  },
});

export const container = style({
  height: '100vh',
  overflow: 'hidden',
  '@media': {
    '(max-width: 950px)': {
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
    },
  },
});
