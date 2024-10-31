import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  padding: '12px 24px',
  borderRadius: '8px',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
});

export const loginStyle = style([
  buttonStyle,
  {
    backgroundColor: '#5CAAF3',
    color: '#FFF',
  },
]);

export const editStyle = style([
  buttonStyle,
  {
    backgroundColor: '#A2CDF4',
    color: '#FFF',
    selectors: {
      '&:hover': {
        backgroundColor: '#5CAAF3', // 호버 시 색상 변경
      },
    },
  },
]);

export const tagStyle = style([
  buttonStyle,
  {
    backgroundColor: '#5CAAF3',
    color: '#FFF',
    padding: '4px 8px',
    fontSize: '0.875rem',
  },
]);
