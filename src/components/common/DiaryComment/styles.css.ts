import { style } from '@vanilla-extract/css';
import { b1, g1, g2, g3 } from '@constants/color';

export const container = style({
  margin: '5rem 0 8rem 0',
});

export const box = style({
  border: `1px solid ${g3}`,
  padding: '1rem',
  borderRadius: '1rem',
  fontWeight: '700',
});

export const title = style({
  padding: '1rem',
  paddingLeft: '0.5rem',
});

export const form = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const input = style({
  flexGrow: '1',
  marginRight: '1rem',
  padding: '0.8rem',
  border: `1px solid ${g3}`,
  borderRadius: '0.7rem',
  outline: 'none',
  selectors: {
    '&::placeholder': {
      color: g3,
    },
  },
});

export const button = style({
  padding: '0.6rem 1.7rem',
  borderRadius: '1.3rem',
  border: 'none',
  color: 'white',
  backgroundColor: b1,
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
  selectors: {
    '&:hover': {
      filter: 'brightness(1.05)',
      transition: 'all 0.3s',
    },
  },
});

export const editForm = style({
  padding: '1rem 0',
  textAlign: 'end',
});

export const textArea = style({
  padding: '0.5rem',
  width: '100%',
  border: `1px solid ${g3}`,
  borderRadius: '0.7rem',
  outline: 'none',
  resize: 'none',
  height: '5rem',
  fontFamily: 'HakgyoansimGeurimilgi',
});

export const button_white = style({
  borderRadius: '0.7rem',
  marginTop: '0.3rem',
  marginRight: '0.3rem',
  padding: '0.5rem 1rem',
  backgroundColor: 'white',
  border: 'none',
  color: g2,
  cursor: 'pointer',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
  selectors: {
    '&:hover': {
      color: b1,
      transition: 'all 0.3s',
    },
  },
});

export const button_blue = style({
  borderRadius: '1rem',
  marginTop: '0.3rem',
  padding: '0.5rem 1rem',
  backgroundColor: b1,
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
  selectors: {
    '&:hover': {
      filter: 'brightness(1.05)',
      transition: 'all 0.3s',
    },
  },
});

export const list = style({
  listStyle: 'none',
  padding: '0',
  marginTop: '2rem',
});

export const listItem = style({
  marginTop: '1rem',
  paddingTop: '1rem',
  borderBottom: `1px solid ${g3}`,
});

export const span_darkGray = style({
  margin: '0 0.5rem',
  fontWeight: '500',
  color: g1,
});

export const span_gray = style({
  margin: '0 0.5rem',
  fontSize: '0.8rem',
  color: g2,
});

export const button_text = style({
  marginLeft: '0.5rem',
  fontSize: '0.7rem',
  color: g2,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: b1,
      transition: 'all 0.2s',
    },
  },
});

export const text = style({
  padding: '1rem 0.5rem',
});

export const emptyBox = style({
  margin: '5rem 0',
  textAlign: 'center',
  lineHeight: '2rem',
});
