import { style } from '@vanilla-extract/css';
import { b2 } from '../../utils/color';
import { DESKTOP } from '../../utils/size';

export const main = style({
  width: '100%',
  backgroundColor: `${b2}`,
});

export const container = style({
  width: '90%',
  maxWidth: `${DESKTOP}`,
  height: '150vh',
  margin: '0 auto',
});
