import { style } from '@vanilla-extract/css';
import { g4 } from '../../../utils/color';
export const slide = style({
  position: 'relative',
});

export const slideItem = style({
  position: 'relative',
  width: '50%',
  paddingTop: '50%',
  margin: 'auto',
  backgroundColor: g4,
  borderRadius: '1rem',
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '30%',
      paddingTop: '30%',
    },
  },
});

export const slideImg = style({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const slideTape = style({
  position: 'absolute',
  width: '50%',
  paddingTop: '50%',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '30%',
      paddingTop: '30%',
    },
  },
});

export const slideTape1 = style({
  position: 'absolute',
  top: '-4rem',
  left: '-4rem',
  transform: 'scale(0.7)',
  '@media': {
    'screen and (min-width: 768px)': {
      transform: 'scale(1)',
    },
  },
});

export const slideTape2 = style({
  position: 'absolute',
  bottom: '-0rem',
  right: '-6rem',
  transform: 'rotate(-37deg) scale(0.5)',
  '@media': {
    'screen and (min-width: 768px)': {
      transform: 'rotate(-37deg) scale(0.7)',
    },
  },
});
