import { style } from '@vanilla-extract/css';

export const inputContainerStyle = style({
  position: 'relative',
  width: '100%',
});

export const inputStyle = style({
  width: '100%',
  padding: '0.75rem',
  borderRadius: '4px',
  margin: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  outline: 'none',
  color: '#333',
  backgroundColor: '#EBF2FA',
  selectors: {
    '&::placeholder': {
      color: '#a0a0a0',
    },
  },
});
