import { globalStyle, style } from '@vanilla-extract/css';
import { g1, g3 } from '../../../../utils/color';

// Container 스타일
export const container = style({
  width: '100%',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '0.5rem',
  marginBottom: '2rem',
  position: 'relative',
});

// Input 스타일
export const input = style({
  width: '100%',
  outline: 'none',
  padding: '1rem 0.5rem',
  border: `1px solid ${g3}`,
  borderRadius: '0.5rem',
});

export const searchbtn = style({
  position: 'absolute',
  top: '2.6rem',
  right: '2rem',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '1.2rem',
  color: `${g1}`,
});

export const resultarea = style({
  width: '100%',
  maxHeight: '15rem',
  overflowY: 'scroll',
});

globalStyle(`${resultarea}::-webkit-scrollbar`, {
  width: '0px',
  height: '0px',
});

export const result = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '0.5rem',
  cursor: 'pointer',
});

export const placename = style({
  fontSize: '1.1rem',
});

export const addressname = style({
  fontSize: '0.8rem',
  opacity: '0.5',
  marginTop: '0.2rem',
});
