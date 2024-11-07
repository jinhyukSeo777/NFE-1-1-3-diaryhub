import { style } from '@vanilla-extract/css';

export const container = style({
  width: '127px',
  height: '62px',
  fontSize: '1.1rem',
  fontFamily: 'HakgyoansimNadeuri',
  backgroundColor: '#ff6666',
  textAlign: 'center',
  alignContent: 'center',
  lineHeight: '1.5rem',
  position: 'relative',
  color: 'white',
  borderRadius: '0.5rem',
  zIndex: '9',
  '::after': {
    content: "''",
    position: 'absolute',
    top: '100%',
    right: '15px',
    borderWidth: '8px 8px 0', // 왼쪽을 향하는 삼각형 설정
    borderStyle: 'solid',
    borderColor: '#ff6666 transparent transparent transparent', // 위쪽이 빨간색, 나머지는 투명으로 설정
  },
});
