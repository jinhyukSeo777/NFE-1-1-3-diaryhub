import { style } from '@vanilla-extract/css';

export const card = style({
  listStyleType: 'none',
  gap: '10px',
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  width: '100%',
  boxSizing: 'border-box',
  maxWidth: 300,
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  fontSize: '12px',
  marginBottom: '1rem',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.02)',
  },
});

export const margin = style({
  marginTop: 5,
  marginBottom: 8,
});

export const texts = style({
  flex: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: '0.75rem',
  margin: '0.3rem 0',
  color: 'gray',
});

export const cardusername = style({
  fontSize: '0.9rem',
  marginBottom: '0.6rem',
  fontWeight: 'bold',
});
