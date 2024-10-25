import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  backgroundColor: '#f8f9fa',
  padding: '1rem',
});

export const navStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const ulStyle = style({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const liStyle = style({
  marginRight: '1rem',
});
