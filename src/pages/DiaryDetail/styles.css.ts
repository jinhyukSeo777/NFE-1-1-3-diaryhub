import { style } from '@vanilla-extract/css';
import { TABLET } from '../../utils/size';

export const diaryDetailWrapper = style({
  maxWidth: TABLET,
  width: '80%',
  margin: 'auto',
  marginTop: '5rem',
  cursor: 'default',
});
