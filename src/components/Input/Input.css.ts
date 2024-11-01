import { style } from '@vanilla-extract/css';

export const iconStyle = style({
  position: 'absolute',
  top: '23px',
  right: '20px',
  color: '#ccc',
  cursor: 'pointer',
});

export const inputContainerStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const inputStyle = style({
  width: '100%',
  padding: '12px',
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
