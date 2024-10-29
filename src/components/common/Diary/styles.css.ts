import { style } from '@vanilla-extract/css';
import { g2 } from '../../../utils/color';

export const diaryContainer = style({
  border: '1px solid',
});

export const diaryTitleBox = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
});

export const diaryTitleText = style({
  padding: '1rem',
  border: '1px solid',
  height: '1.5rem',
  lineHeight: '1.5rem',
});

export const diaryTitleIcon = style({
  border: '1px solid',
  padding: '1rem 0',
  gridColumn: '2 / 3',
  gridRow: '1 / 3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});
export const diaryIconInfo = style({
  width: '50%',
});

export const diaryIconTitle = style({
  fontSize: '0.5rem',
  '@media': {
    'screen and (min-width: 576px)': {
      fontSize: '0.8rem',
    },
  },
});

export const diaryIcon = style({
  position: 'relative',
  width: '3rem',
  paddingTop: '3rem',
  margin: 'auto',
});

export const diaryIconImg = style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const diaryslide = style({
  border: '1px solid',
  padding: '3rem 0',
  overflow: 'hidden',
});

export const diaryBody = style({
  padding: '1rem',
  position: 'relative',
  border: '1px solid',
  lineHeight: '3rem',
  overflow: 'hidden',
});

export const diaryLine = style({
  position: 'absolute',
  top: 0,
  left: '50%',
  padding: '1rem 0',
  width: '95%',
  transform: 'translateX(-50%)',
  '@media': {
    'screen and (min-width: 576px)': {
      width: '98%',
    },
  },
});

export const diaryLineItem = style({
  height: '3rem',
  boxSizing: 'border-box',
  borderBottom: `1.5px solid ${g2}`,
});
export const diaryStamp = style({
  position: 'absolute',
  bottom: '0',
  right: '1rem',
});

export const diaryStampImage = style({
  width: '5rem',
  height: '5rem',
  objectFit: 'contain',
  opacity: '.5',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      opacity: '1',
      transition: 'all 0.3s',
    },
  },
});
