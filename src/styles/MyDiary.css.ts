import { style } from '@vanilla-extract/css';

export const mydiary = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 20,

  '@media': {
    'screen and (max-width: 1000px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});
