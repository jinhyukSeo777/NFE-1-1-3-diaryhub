import { style } from '@vanilla-extract/css';
import { g3 } from '../../../../utils/color';

// Container 스타일
export const container = style({
  width: '100%',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '0.5rem',
  marginBottom: '2rem',
});

// Span 스타일
export const span = style({
  fontSize: '1.5rem',
  display: 'block',
  marginBottom: '1rem',
});

// Input 스타일
export const input = style({
  width: '100%',
  outline: 'none',
  padding: '0.5rem',
  border: `1px solid ${g3}`, // g3 변수를 사용할 경우 import 필요
});
