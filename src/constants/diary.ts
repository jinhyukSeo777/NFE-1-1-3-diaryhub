import feel1 from '../assets/icons/feel1.svg';
import feel2 from '../assets/icons/feel2.svg';
import feel3 from '../assets/icons/feel3.svg';
import feel4 from '../assets/icons/feel4.svg';
import feel5 from '../assets/icons/feel5.svg';
import sun from '../assets/icons/sun.svg';
import cloud from '../assets/icons/cloud.svg';
import rain from '../assets/icons/rain.svg';
import thunder from '../assets/icons/thunder.svg';
import wind from '../assets/icons/wind.svg';

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
