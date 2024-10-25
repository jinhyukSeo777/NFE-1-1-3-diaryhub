import { style } from '@vanilla-extract/css';
export const diaryWrapper = style({
  border: '1px solid',
});

export const diaryTitle = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
});

export const diaryTitleText = style({
  border: '1px solid',
});

export const diaryMood = style({
  border: '1px solid',
  gridColumn: '2 / 3',
  gridRow: '1 / 3',
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
