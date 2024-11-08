import feel1 from '../assets/feel1.svg';
import feel2 from '../assets/feel2.svg';
import feel3 from '../assets/feel3.svg';
import feel4 from '../assets/feel4.svg';
import feel5 from '../assets/feel5.svg';
import sun from '../assets/sun.svg';
import cloud from '../assets/cloud.svg';
import rain from '../assets/rain.svg';
import thunder from '../assets/thunder.svg';
import wind from '../assets/wind.svg';

export const DAY = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
] as const;

export const DIARY_ICON = {
  feel1: feel1,
  feel2: feel2,
  feel3: feel3,
  feel4: feel4,
  feel5: feel5,
  sun: sun,
  cloud: cloud,
  wind: wind,
  rain: rain,
  thunder: thunder,
} as const;
