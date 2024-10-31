import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  padding: 8,
  gap: 4,
  borderRadius: 30,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  fontSize: '12px',
});
