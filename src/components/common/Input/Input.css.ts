import { style } from '@vanilla-extract/css';
import { b2, b3 } from '../../../constants/color';

export const iconStyle = style({
  position: 'absolute',
  top: '1rem',
  right: '20px',
  color: b2,
  cursor: 'pointer',
});

export const inputContainerStyle = style({
  position: 'relative',
});

export const inputStyle = style({
  width: '100%',
  height: '3rem',
  border: 'none',
  borderRadius: '0.5rem',
  textIndent: '1rem',
  fontSize: '1rem',
  outline: 'none',
  backgroundColor: b3,
  selectors: {
    '&::placeholder': {
      color: b2,
    },
  },
});
