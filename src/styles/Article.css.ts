import { style } from '@vanilla-extract/css';

export const article = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '20px',
  width: '100%',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  fontSize: '14px',
  position: 'relative',
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
