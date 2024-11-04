import { style } from '@vanilla-extract/css';
import { DESKTOP } from '../../utils/size';

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
  textOverflow: 'ellipsis',
  '@media': {
    'screen and (max-width: 950px)': {
      flex: '100%',
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
  padding: '0 20px',
});
