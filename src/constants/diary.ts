import { ReactComponent as Feel1 } from '@assets/icons/feel1.svg';
import { ReactComponent as Feel2 } from '@assets/icons/feel2.svg';
import { ReactComponent as Feel3 } from '@assets/icons/feel3.svg';
import { ReactComponent as Feel4 } from '@assets/icons/feel4.svg';
import { ReactComponent as Feel5 } from '@assets/icons/feel5.svg';
import { ReactComponent as Sun } from '@assets/icons/sun.svg';
import { ReactComponent as Cloud } from '@assets/icons/cloud.svg';
import { ReactComponent as Rain } from '@assets/icons/rain.svg';
import { ReactComponent as Thunder } from '@assets/icons/thunder.svg';
import { ReactComponent as Wind } from '@assets/icons/wind.svg';

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
  feel1: Feel1,
  feel2: Feel2,
  feel3: Feel3,
  feel4: Feel4,
  feel5: Feel5,
  sun: Sun,
  cloud: Cloud,
  wind: Wind,
  rain: Rain,
  thunder: Thunder,
} as const;
