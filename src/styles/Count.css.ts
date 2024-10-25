import { style } from '@vanilla-extract/css';

export const container = style({
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  padding: 10,
  gap: 4,
  borderRadius: 30,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  fontSize: '14px',
});
