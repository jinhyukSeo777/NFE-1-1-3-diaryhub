import { style } from '@vanilla-extract/css';

export const card = style({
  listStyleType: 'none',
  gap: '10px',
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  width: '100%',
  maxWidth: 300,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  fontSize: '12px',
  marginBottom: 20,
  transition: 'transform 0.2s ease',
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
  fontSize: 10,
  margin: 5,
  color: 'gray',
});
