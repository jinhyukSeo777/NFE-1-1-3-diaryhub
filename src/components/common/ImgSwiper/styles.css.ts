import { style } from '@vanilla-extract/css';
export const slide = style({
  position: 'relative',
  width: 'auto',
  paddingTop: '30%',
});

export const imgItem = style({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});
