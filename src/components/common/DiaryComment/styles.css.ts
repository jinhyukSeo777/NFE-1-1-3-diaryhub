import { style } from '@vanilla-extract/css';

export const commentWrapper = style({
  margin: '2rem 0',
});

export const writeComment = style({
  border: '1px solid',
  padding: '1rem',
  borderRadius: '1rem',
});
export const commentForm = style({
  display: 'flex',
  justifyContent: 'space-between',
});
export const commentInput = style({
  flexGrow: '1',
  marginRight: '1rem',
});
export const commentList = style({
  listStyle: 'none',
  padding: '0',
});

export const commentItem = style({
  borderBottom: '1px solid',
});
