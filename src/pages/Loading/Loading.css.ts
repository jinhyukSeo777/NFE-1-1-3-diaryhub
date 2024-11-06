import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
});

export const loading = style({
  fontSize: '3.5rem',
  fontFamily: 'HakgyoansimNadeuri',
});
