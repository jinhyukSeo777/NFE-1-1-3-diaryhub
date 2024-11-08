import { style } from '@vanilla-extract/css';
import { b1, b2 } from '../../constants/color';
import { TABLET } from '../../constants/size';

export const main = style({
  width: '100%',
  display: 'flex',
  backgroundColor: `${b2}`,
  paddingTop: '5rem',
});

export const h2 = style({
  fontSize: '2.3rem',
  marginBottom: '2rem',
  color: `${b1}`,
  fontFamily: 'HakgyoansimGeurimilgi',
});

export const container = style({
  width: '90%',
  maxWidth: `${TABLET}`,
  margin: '0 auto',
  marginTop: '5rem',
  marginBottom: '6rem',
  display: 'flex',
  flexDirection: 'column',
});

export const submitbtn = style({
  width: '13rem',
  height: '3.2rem',
  borderRadius: '0.5rem',
  outline: 'none',
  backgroundColor: `${b1}`,
  color: 'white',
  border: 'none',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: '0 auto',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontFamily: 'HakgyoansimNadeuri',
  selectors: {
    '&:disabled': {
      opacity: '0.5',
    },
  },
});
