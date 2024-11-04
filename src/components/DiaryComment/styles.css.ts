import { style } from '@vanilla-extract/css';
import { b2, g1, g2, g3 } from '../../utils/color';
export const commentContainer = style({
  margin: '8rem 0',
});

export const writeCommentBox = style({
  border: `1px solid ${g3}`,
  padding: '1rem',
  borderRadius: '1rem',
  fontWeight: '700',
});

export const writeCommentTitle = style({
  padding: '1rem',
});

export const writeCommentForm = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const writeCommentInput = style({
  flexGrow: '1',
  marginRight: '1rem',
  padding: '0.8rem',
  border: `1px solid ${g3}`,
  borderRadius: '0.7rem',
  outline: 'none',
  selectors: {
    '&::placeholder': {
      color: g3,
    },
  },
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
  marginTop: '2rem',
});

export const commentItem = style({
  marginTop: '1rem',
  paddingTop: '1rem',
  borderBottom: `1px solid ${g3}`,
});

export const commentUser = style({
  margin: '0 0.5rem',
  fontWeight: '500',
  color: g1,
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
  selectors: {
    '&:hover': {
      color: 'tomato',
      transition: 'all 0.2s',
    },
  },
});

export const commentBody = style({
  marginLeft: '0.5rem',
  padding: '1rem',
});
