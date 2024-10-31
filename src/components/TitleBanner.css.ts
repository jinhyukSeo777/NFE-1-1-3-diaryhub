import { style } from '@vanilla-extract/css';

export const bannerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '2rem',
  position: 'relative',
});

export const imageStyle = style({
  width: '100px', // 이미지 크기 조정
  height: 'auto',
  marginRight: '-32px',
  marginLeft: '10px',
  paddingLeft: '-16spx',
});

export const imgWrap = style({
  display: 'flex',
  margin: 0,
  gap: 0,
});

export const titleStyle = style({
  fontSize: '24px',
  color: '#5Caaf3', // 파란색 글씨
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '28px',
});

export const subtitleStyle = style({
  fontSize: '16px',
  color: '#5Caaf3',
});
