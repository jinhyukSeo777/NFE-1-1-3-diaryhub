import { style } from '@vanilla-extract/css';
import { b2, g2 } from '../../../utils/color';
export const commentContainer = style({
  margin: '2rem 0',
});

export const writeCommentBox = style({
  border: '1px solid',
  padding: '1rem',
  borderRadius: '1rem',
  fontWeight: '700',
});

export const writeCommentForm = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const writeCommentInput = style({
  flexGrow: '1',
  marginRight: '1rem',
  padding: '0.8rem',
  border: `1px solid ${g2}`,
  borderRadius: '0.7rem',
  outline: 'none',
});

export const writeCommentButton = style({
  padding: '0.8rem 2rem',
  borderRadius: '0.7rem',
  border: 'none',
  color: 'white',
  backgroundColor: b2,
  fontWeight: '500',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      filter: 'brightness(1.05)',
      transition: 'all 0.3s',
    },
  },
});

export const commentList = style({
  listStyle: 'none',
  padding: '0',
});

export const commentItem = style({
  paddingTop: '1rem',
  borderBottom: '1px solid',
});

export const commentUser = style({
  margin: '0 0.5rem',
  fontWeight: '500',
});

export const commentDate = style({
  margin: '0 0.5rem',
  fontSize: '0.8rem',
  color: g2,
});

export const commentDeleteButton = style({
  fontSize: '0.7rem',
  color: g2,
  cursor: 'pointer',
});

export const commentBody = style({
  marginLeft: '0.5rem',
});
