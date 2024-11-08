import { keyframes, style } from '@vanilla-extract/css';
import { g2, g3, b1, b2, g1, b3 } from '../../utils/color';

export const diaryContainer = style({
  fontFamily: 'HakgyoansimNadeuri',
  border: `1px solid ${g3}`,
  marginTop: '2.5rem',
});

export const diaryTitleBox = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
});

export const diaryTitleText = style({
  padding: '0 1rem',
  border: `1px solid ${g3}`,
  lineHeight: '3rem',
  fontSize: '1.2rem',
  color: '#3A3A3A',
});

export const diaryTitleIcon = style({
  border: `1px solid ${g3}`,
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
  color: '#3A3A3A',
  '@media': {
    'screen and (min-width: 576px)': {
      fontSize: '1rem',
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
  border: `1px solid ${g3}`,
  padding: '3rem 0',
  overflow: 'hidden',
});

export const diaryBody = style({
  padding: '1rem',
  position: 'relative',
  border: `1px solid ${g3}`,
  overflow: 'hidden',
  lineHeight: '3rem',
  fontSize: '1.2rem',
  color: '#3A3A3A',
});

export const diaryEtc = style({
  display: 'flex',
  alignItems: 'center',
  color: g2,
  fontSize: '0.8rem',
});

export const DiaryAuthor = style({
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: b1,
      transition: 'all 0.3s',
    },
  },
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
  zIndex: '-1',
});

export const diaryLineItem = style({
  height: '3rem',
  boxSizing: 'border-box',
  borderBottom: `1.5px solid ${g3}`,
});

const shake = keyframes({
  '0%': { transform: 'rotate(5deg)' },
  '25%': { transform: 'rotate(0deg)' },
  '50%': { transform: 'rotate(5deg)' },
  '75%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(5deg)' },
});
const fadeOut = keyframes({
  '99%': { opacity: '1' },
  '100%': { opacity: '0' },
});

export const diaryStamp = style({
  position: 'absolute',
  bottom: '0',
  right: '1rem',
  textAlign: 'center',
});

export const displayNone = style({
  display: 'none',
});

export const diaryStampText = style({
  position: 'absolute',
  fontSize: '0.7rem',
  top: '-2rem',
  width: '5rem',
  color: g1,
  animation: `${shake} 1s , ${fadeOut} 10s forwards`,
  animationIterationCount: '10, 1',
  '@media': {
    'screen and (min-width: 768px)': {
      width: '7rem',
      fontSize: '1rem',
    },
  },
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
  '@media': {
    'screen and (min-width: 768px)': {
      width: '7rem',
      height: '7rem',
    },
  },
});

export const diaryPaintStamp = style({
  opacity: '1',
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
  boxShadow: `0 0 0.3rem ${g3}`,
  alignItems: 'center',
  marginRight: '1rem',
  fontSize: '1.1rem',
  fontFamily: 'HakgyoansimNadeuri',
});

export const diaryStampbtn = style({
  width: '1.5rem',
  marginRight: '0.7rem',
});

export const diaryshare = style({
  display: 'flex',
  borderRadius: '1rem',
  width: '4.5rem',
  justifyContent: 'center',
  height: '2rem',
  boxShadow: `0 0 0.3rem ${g3}`,
  alignItems: 'center',
  backgroundColor: b1,
  color: 'white',
  fontSize: '1rem',
  fontFamily: 'HakgyoansimNadeuri',
});

export const diaryButtons = style({
  display: 'flex',
  gap: '0.5rem',
  fontSize: '0.8rem',
});

export const diaryEditButton = style({
  display: 'flex',
  borderRadius: '1.1rem',
  width: '6rem',
  justifyContent: 'center',
  height: '2.2rem',
  alignItems: 'center',
  backgroundColor: b2,
  fontFamily: 'HakgyoansimNadeuri',
  color: 'white',
  cursor: 'pointer',
  fontSize: '1.0rem',
  selectors: {
    '&:hover': {
      backgroundColor: b1,
      transition: 'all 0.3s',
    },
  },
});
