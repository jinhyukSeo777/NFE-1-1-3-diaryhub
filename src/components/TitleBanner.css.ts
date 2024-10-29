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
  marginBottom: '1rem',
});

export const titleStyle = style({
  fontSize: '1.8rem',
  color: '#5Caaf3', // 파란색 글씨
  margin: '0.5rem 0',
});

export const subtitleStyle = style({
  fontSize: '1rem',
  color: '#5Caaf3',
});
