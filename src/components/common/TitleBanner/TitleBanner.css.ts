import { style } from '@vanilla-extract/css';
import { b1 } from '../../../constants/color';

export const bannerContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '2rem',
  position: 'relative',
  marginTop: '6rem',
});

export const imageStyle = style({
  width: '100px', // 이미지 크기 조정
  height: 'auto',
  marginRight: '-55px',
  marginBottom: 15,
  marginLeft: '-15px',
});

export const imgWrap = style({
  display: 'flex',
  margin: 0,
  gap: 0,
});

export const titleStyle = style({
  fontSize: '24px',
  color: b1, // 파란색 글씨
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '28px',
});

export const subtitleStyle = style({
  fontSize: '16px',
  color: b1,
});
