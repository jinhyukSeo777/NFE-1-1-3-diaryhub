import { style } from '@vanilla-extract/css';
import { b1, b2, g1, g2, g3 } from '@constants/color';
export const commentContainer = style({
  margin: '5rem 0 8rem 0',
});

export const writeCommentBox = style({
  border: `1px solid ${g3}`,
  padding: '1rem',
  borderRadius: '1rem',
  fontWeight: '700',
});

export const writeCommentTitle = style({
  padding: '1rem',
  paddingLeft: '0.5rem',
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
  padding: '0.6rem 1.7rem',
  borderRadius: '1.3rem',
  border: 'none',
  color: 'white',
  backgroundColor: b1,
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
  selectors: {
    '&:hover': {
      filter: 'brightness(1.05)',
      transition: 'all 0.3s',
    },
  },
});

export const editCommentForm = style({
  padding: '1rem 0',
  textAlign: 'end',
});

export const editCommentTextArea = style({
  padding: '0.5rem',
  width: '100%',
  border: `1px solid ${g3}`,
  borderRadius: '0.7rem',
  outline: 'none',
  resize: 'none',
  height: '5rem',
  fontFamily: 'HakgyoansimGeurimilgi',
});

export const editCommentCancelButton = style({
  borderRadius: '0.7rem',
  marginTop: '0.3rem',
  marginRight: '0.3rem',
  padding: '0.5rem 1rem',
  backgroundColor: 'white',
  border: 'none',
  color: g2,
  cursor: 'pointer',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
  selectors: {
    '&:hover': {
      color: b1,
      transition: 'all 0.3s',
    },
  },
});

export const editCommentButton = style({
  borderRadius: '1rem',
  marginTop: '0.3rem',
  padding: '0.5rem 1rem',
  backgroundColor: b1,
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
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
  marginLeft: '0.5rem',
  fontSize: '0.7rem',
  color: g2,
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: b1,
      transition: 'all 0.2s',
    },
  },
});

export const commentBody = style({
  padding: '1rem 0.5rem',
});

export const emptyCommentBox = style({
  margin: '5rem 0',
  textAlign: 'center',
  lineHeight: '2rem',
});
