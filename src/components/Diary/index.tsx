import feel1 from '../../assets/feel1.svg';
import feel2 from '../../assets/feel2.svg';
import feel3 from '../../assets/feel3.svg';
import feel4 from '../../assets/feel4.svg';
import feel5 from '../../assets/feel5.svg';
import sun from '../../assets/sun.svg';
import cloud from '../../assets/cloud.svg';
import rain from '../../assets/rain.svg';
import thunder from '../../assets/thunder.svg';
import wind from '../../assets/wind.svg';
import stamp from '../../assets/stamp.svg';
import location from '../../assets/location.svg';

import { DiaryResponseType } from '../../pages/DiaryDetail';
import likeDiary from '../../utils/likeDiary';
import deleteDiary from '../../utils/deleteDiary';
import ImgSwiper from '../ImgSwiper';
import * as S from './styles.css';

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface diaryProps {
  diaryInfo: DiaryResponseType;
  isMyDiary: boolean;
}

const Diary = ({ diaryInfo, isMyDiary }: diaryProps) => {
  const token = localStorage.getItem('authToken');
  const userId = token && JSON.parse(atob(token.split('.')[1])).userId;
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
  const [stampCount, setStampCount] = useState(diaryInfo.likes.length);
  const [isStamp, setIsStamp] = useState(
    diaryInfo.likes.includes(userId) || isMyDiary
  );
  const onStamp = async () => {
    if (isMyDiary) return;

    const token = localStorage.getItem('authToken');
    if (token) {
      const likes = await likeDiary(diaryInfo._id);
      setIsStamp(!isStamp);
      setStampCount(likes);
    } else {
      alert('스탬프를 찍으려면 로그인해야 합니다!');
    }
  };
  const delDiary = async () => {
    await deleteDiary(diaryInfo._id);
    navigate('/');
  };
  useEffect(() => {
    const calculateLineCount = () => {
      if (textRef.current) {
        const lineHeight = parseInt(
          window.getComputedStyle(textRef.current).lineHeight
        );
        const height = textRef.current.clientHeight;
        const lines = Math.floor(height / lineHeight);
        setLineCount(lines + 2);
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
      elements.push(<div className={S.diaryLineItem} key={i}></div>);
    }
    return elements;
  };

  const navigate = useNavigate();
  const goEditPage = () => {
    navigate('/editdiary', { state: { diaryInfo } });
  };
  return (
    <>
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
          <div style={{ height: '3rem' }}></div>
          <div className={S.diaryAddress}>
            <img width={15} src={location} alt="location"></img>
            <span style={{ marginLeft: '0.7rem' }}>
              장소: {diaryInfo.location.state || '집'}
            </span>
          </div>
          <div className={S.diaryLine}>{drawLine()}</div>
          <div className={S.diaryStamp}>
            <img
              src={stamp}
              alt="stamp"
              className={`${S.diaryStampImage} ${isStamp && S.diaryStamp2}`}
              onClick={() => onStamp()}
            ></img>
          </div>
        </div>
      </div>
      <div className={S.diaryInfoButton}>
        <div className={S.diaryStampCount}>
          <img src={stamp} alt="stampCount" className={S.diaryStampbtn} />
          <span>{stampCount}</span>
        </div>
        <div className={S.diaryshare}>
          {diaryInfo.isPublic ? '공개' : '비공개'}
        </div>
        <div style={{ flexGrow: '1' }}></div>
        {isMyDiary && (
          <div className={S.diaryButtons}>
            <div className={S.diaryEditButton} onClick={goEditPage}>
              일기 수정하기
            </div>
            <div className={S.diaryEditButton} onClick={delDiary}>
              일기 삭제하기
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Diary;
