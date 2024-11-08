import { style } from '@vanilla-extract/css';

export const select = style({
  width: '200px',
  position: 'relative',
});

export const dropdown = style({
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  boxShadow: '0 0 3px rgba(0, 0, 0, 0.05)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.3rem',
  '@media': {
    '(max-width: 950px)': {
      marginLeft: '20px',
    },
  },
});

export const arrow = style({
  width: 0,
  height: 0,
  borderLeft: '5px solid transparent',
  borderRight: '5px solid transparent',
  borderTop: '5px solid #000',
});

export const optionList = style({
  listStyle: 'none',
  padding: '0.5rem',
  margin: 0,
  position: 'absolute',
  zIndex: 1,
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  width: '100%',
});

export const option = style({
  padding: '8px 10px',
  cursor: 'pointer',
  borderRadius: '0.5rem',
  selectors: {
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
});
