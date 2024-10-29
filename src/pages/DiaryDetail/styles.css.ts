import { style } from '@vanilla-extract/css';
import { g2, b1, b2 } from '../../utils/color';

export const diaryDetailWrapper = style({
  width: '80%',
  margin: 'auto',
  cursor: 'default',
});

export const diaryInfoButton = style({
  display: 'flex',
  margin: '1rem 0',
});

export const diaryStampCount = style({
  display: 'flex',
  borderRadius: '1rem',
  padding: '0 0.8rem',
  height: '2rem',
  boxShadow: `0 0 0.3rem ${g2}`,
  alignItems: 'center',
  marginRight: '1rem',
});

export const diaryStamp = style({
  width: '1.5rem',
  marginRight: '0.7rem',
});

export const diaryshare = style({
  display: 'flex',
  borderRadius: '1rem',
  padding: '0 0.8rem',
  height: '2rem',
  boxShadow: `0 0 0.3rem ${g2}`,
  alignItems: 'center',
  backgroundColor: b1,
  color: 'white',
});

export const diaryEditButton = style({
  display: 'flex',
  borderRadius: '0.5rem',
  padding: '0 0.8rem',
  height: '2rem',
  alignItems: 'center',
  backgroundColor: b2,
  color: 'white',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      filter: 'brightness(1.05)',
      transition: 'all 0.3s',
    },
  },
});
