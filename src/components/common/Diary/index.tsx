import { DiaryResponseType } from '../../../pages/DiaryDetail';
import ImgSwiper from '../ImgSwiper';
import * as S from './styles.css';
import feel1 from '../../../assets/feel1.svg';
import feel2 from '../../../assets/feel2.svg';
import feel3 from '../../../assets/feel3.svg';
import feel4 from '../../../assets/feel4.svg';
import feel5 from '../../../assets/feel5.svg';
import sun from '../../../assets/sun.svg';
import cloud from '../../../assets/cloud.svg';
import rain from '../../../assets/rain.svg';
import thunder from '../../../assets/thunder.svg';
import wind from '../../../assets/wind.svg';
import stamp from '../../../assets/stamp.svg';
import { useEffect, useRef, useState } from 'react';
interface diaryProps {
  diaryInfo: DiaryResponseType;
}
const Diary = ({ diaryInfo }: diaryProps) => {
  const date = new Date(diaryInfo.diaryDate);
  const day = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const icon: { [name: string]: string } = {
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
  };
  const [lineCount, setLineCount] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateLineCount = () => {
      if (textRef.current) {
        const lineHeight = parseInt(
          window.getComputedStyle(textRef.current).lineHeight
        );
        const height = textRef.current.clientHeight;
        const lines = Math.floor(height / lineHeight);
        setLineCount(lines);
      }
    };
    calculateLineCount();
    window.addEventListener('resize', calculateLineCount);
    return () => {
      window.removeEventListener('resize', calculateLineCount);
    };
  }, []);
  const drawLine = () => {
    const elements = [];
    for (let i = 0; i < lineCount; i++) {
      elements.push(<div className={S.diaryLineItem}></div>);
    }
    return elements;
  };
  return (
    <div className={S.diaryContainer}>
      <div className={S.diaryTitleBox}>
        <div className={S.diaryTitleText}>
          {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일{' '}
          {day[date.getDay()]}
        </div>
        <div className={S.diaryTitleText}>제목: {diaryInfo.title}</div>
        <div className={S.diaryTitleIcon}>
          <div className={S.diaryIconInfo}>
            <div className={S.diaryIconTitle}>그날의 날씨</div>
            <div className={S.diaryIcon}>
              <img
                className={S.diaryIconImg}
                src={icon[diaryInfo.weather] || sun}
                alt="weather"
              ></img>
            </div>
          </div>
          <div className={S.diaryIconInfo}>
            <div className={S.diaryIconTitle}>그날의 기분</div>
            <div className={S.diaryIcon}>
              <img
                className={S.diaryIconImg}
                src={icon[diaryInfo.mood] || feel1}
                alt="feel"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className={S.diaryslide}>
        <ImgSwiper imgList={diaryInfo.images} />
      </div>
      <div className={S.diaryBody}>
        <div ref={textRef}>{diaryInfo.content}</div>
        <div className={S.diaryLine}>{drawLine()}</div>
        <div className={S.diaryStamp}>
          <img src={stamp} alt="stamp" className={S.diaryStampImage}></img>
        </div>
      </div>
    </div>
  );
};
export default Diary;
