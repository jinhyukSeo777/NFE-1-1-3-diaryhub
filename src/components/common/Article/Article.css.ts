import { globalStyle, style } from '@vanilla-extract/css';
import { TABLET } from '@constants/size';
import { g3, g4 } from '@constants/color';

export const articleArea = style({
  padding: 20,
  paddingBottom: '0',
  border: `1px solid ${g4}`,
  borderRadius: '10px',
  width: '100%',
  height: '90%',
  overflow: 'auto',
  boxShadow: '0 0 3px rgba(0, 0, 0, 0.1)',
  fontSize: '14px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 950px)': {
      border: 'none',
      borderRadius: 0,
      height: 'auto',
      boxShadow: 'none',
      width: 'auto',
      padding: '5px 20px',
      display: ' inline-block',
    },
  },
});

globalStyle(`${articleArea}::-webkit-scrollbar`, {
  width: '6px',
});

globalStyle(`${articleArea}::-webkit-scrollbar-track`, {
  background: '#f1f1f1',
  borderRadius: '10px',
  marginTop: '25%' /* 스크롤바 트랙의 시작 위치를 아래로 이동 */,
  marginBottom: '25%' /* 스크롤바 트랙의 끝 위치를 위로 이동 */,
});

globalStyle(`${articleArea}::-webkit-scrollbar-thumb`, {
  background: `${g3}`,
  borderRadius: '10px',
  cursor: 'pointer',
  height: '50%' /* 썸의 높이를 전체의 절반 정도로 설정 */,
});

globalStyle(`${articleArea}::-webkit-scrollbar-thumb:hover`, {
  background: '#C0C0C0',
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
  cursor: 'pointer',
});

export const innerDiv = style({
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
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
  fontSize: '0.95rem',
  fontWeight: 'bold',
  margin: 5,
  marginTop: '0',
});

export const text = style({
  flex: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: '0.75rem',
  margin: 5,
});

export const icons = style({
  display: 'flex',
  gap: '10px',
  position: 'relative',
  '@media': {
    '(max-width: 950px)': { top: '-5px' },
  },
});

export const countPosition = style({
  position: 'absolute',
  right: 20,
  bottom: 15,
});

export const cardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  width: '100%',
  justifyContent: 'center',
  placeItems: 'center',
  alignItems: 'stretch',
  '@media': {
    [`screen and (min-width: ${TABLET})`]: {
      gridTemplateColumns: 'repeat(2, auto)',
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
