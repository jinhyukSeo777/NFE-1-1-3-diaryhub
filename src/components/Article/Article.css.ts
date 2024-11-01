import { style } from '@vanilla-extract/css';
import { TABLET } from '../../utils/size';

export const articleArea = style({
  padding: 20,
  border: '1px solid #ddd',
  borderRadius: '20px',
  width: '100%',
  height: 'calc(100vh - 300px)',
  overflowY: 'auto',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  fontSize: '14px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 950px)': {
      padding: 0,
      border: 'none',
      borderRadius: 0,
      height: 'auto',
      boxShadow: 'none',
    },
  },
});

export const ul = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  width: '100%',
});

export const article = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '20px',
  width: '100%',
  boxSizing: 'border-box',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  fontSize: '14px',
  position: 'relative',
  marginBottom: 20,
  transition: 'transform 0.2s ease',
  ':hover': {
    transform: 'scale(1.02)',
  },
});

export const innerDiv = style({
  width: '100%',
});

export const title = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const titleText = style({
  flex: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: 14,
  fontWeight: 'bold',
  margin: 5,
});

export const text = style({
  flex: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: 12,
  margin: 5,
});

export const icons = style({
  display: 'flex',
  gap: '10px',
});

export const countPosition = style({
  position: 'absolute',
  right: 20,
  bottom: 20,
});

export const cardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  width: '100%',
  placeItems: 'center',
  alignItems: 'stretch',

  '@media': {
    [`screen and (min-width: ${TABLET})`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20,
    },
  },
});

export const stateText = style({
  color: '#5cAAF3',
  fontWeight: 'bold',
  padding: 20,
  marginBottom: 10,
});
