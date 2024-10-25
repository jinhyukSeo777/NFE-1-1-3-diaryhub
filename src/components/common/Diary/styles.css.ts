import { style } from '@vanilla-extract/css';
export const diaryWrapper = style({
  border: '1px solid',
});

export const diaryTitle = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
});

export const diaryTitleText = style({
  padding: '1rem',
  border: '1px solid',
});

export const diaryMood = style({
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  textAlign: 'center',
  border: '1px solid',
  gridColumn: '2 / 3',
  gridRow: '1 / 3',
});

export const diaryMoodTitle = style({
  fontSize: '0.8rem',
});

export const diaryIcon = style({
  position: 'relative',
  width: '100%',
  paddingTop: '100%',
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
});

export const diaryBody = style({
  border: '1px solid',
  padding: '1rem',
  textDecoration: 'underline',
  textUnderlineOffset: '1rem',
  lineHeight: '3rem',
});

export const diaryBodyText = style({});
