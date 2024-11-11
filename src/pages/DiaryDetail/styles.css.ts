import { style } from '@vanilla-extract/css';
import { TABLET } from '@constants/size';

export const wrapper = style({
  margin: 'auto',
  marginTop: '5rem',
  maxWidth: TABLET,
  width: '80%',
  cursor: 'default',
});
