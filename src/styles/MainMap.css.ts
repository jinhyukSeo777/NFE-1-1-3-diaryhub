import { style } from '@vanilla-extract/css';

export const markerDiv = style({
  position: 'relative',
  width: '85px',
  height: '85px',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const markerImg = style({
  width: '55px',
  height: '50px',
  borderRadius: '10px',
  position: 'absolute',
  bottom: '22.5px',
  left: '50%',
  transform: 'translateX(-50%)',
});
