import { style } from '@vanilla-extract/css';

// Container 스타일
export const container = style({
  width: '100%',
  height: '25rem',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  marginBottom: '2rem',
  position: 'relative',
});

export const centericon = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '1.7rem',
  zIndex: '9',
});
