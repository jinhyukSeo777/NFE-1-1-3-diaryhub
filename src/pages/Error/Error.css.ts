import { style } from '@vanilla-extract/css';

export const errorPageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
});

export const errorTitle = style({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#ff4f4f',
  marginBottom: '1rem',
});

export const errorMessage = style({
  fontSize: '1.5rem',
  color: '#333',
  marginBottom: '2rem',
});

export const backButton = style({
  padding: '0.8rem 1.5rem',
  fontSize: '1rem',
  color: '#fff',
  backgroundColor: '#5CAAF3',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#4a98e0',
  },
});
