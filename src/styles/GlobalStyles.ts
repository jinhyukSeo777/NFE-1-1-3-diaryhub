import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';
import { g1 } from '../utils/color';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HakgyoansimNadeuri';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimNadeuriTTF-B.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'HakgyoansimGeurimilgi';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimGeurimilgiTTF-R.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'NanumSquareNeo', sans-serif;
    color: ${g1};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`;

const LoadFont = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return null;
};

export { GlobalStyle, LoadFont };
