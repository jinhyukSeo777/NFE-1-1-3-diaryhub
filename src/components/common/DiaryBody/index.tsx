import stamp from '@assets/icons/stamp.svg';
import ImgSwiper from '../ImgSwiper';
import * as S from './styles.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Diary } from '@interfaces/diaryTypes';
import { DAY, DIARY_ICON } from '@constants/diary';
import { deleteDiary, paintStamp } from '@utils/diaryApi';
import getUserId from '@utils/getUserId';

interface DiaryProps {
  diaryInfo: Diary;
  isMyDiary: boolean;
}

const DiaryBody = ({ diaryInfo, isMyDiary }: DiaryProps) => {
  const userId = getUserId();
  const [isPaintedStamp, setIsPaintedStamp] = useState(
    diaryInfo.likes.includes(userId) || isMyDiary
  );
  const diaryDate = new Date(diaryInfo.diaryDate);
  const [stampCount, setStampCount] = useState(diaryInfo.likes.length);
  const [isShowStampMent, setIsShowStampMent] = useState(false);
  const navigate = useNavigate();
  const [lineCount, setLineCount] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const WeatherIcon = DIARY_ICON[diaryInfo.weather];
  const MoodIcon = DIARY_ICON[diaryInfo.mood];

  const drawLine = () => {
    const elements = [];
    for (let i = 0; i < lineCount; i++) {
      elements.push(<div className={S.lineItem} key={i}></div>);
    }
    return elements;
  };

  const goEditPage = () => {
    navigate('/editdiary', { state: { diaryInfo } });
  };

  const handleStampClick = async () => {
    if (isMyDiary) return;

    const likes = await paintStamp(diaryInfo._id);
    if (likes === null) {
      alert('스탬프를 찍으려면 로그인해야 합니다!');
      return;
    } else {
      setIsPaintedStamp(!isPaintedStamp);
      setStampCount(likes);
    }
    if (isPaintedStamp === false) {
      setIsShowStampMent(true);
    }
  };

  const handleDeleteDiaryClick = async () => {
    deleteDiary(diaryInfo._id);
    navigate('/');
  };

  const handleAuthorClick = () => {
    const username = diaryInfo.user.username;
    if (username) {
      navigate(`/writerdiary/${username}`);
    }
  };

  const calculateLineCount = useCallback(() => {
    if (textRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(textRef.current).lineHeight
      );
      const height = textRef.current.clientHeight;
      const lines = Math.floor(height / lineHeight);
      setLineCount(lines + 2);
    }
  }, []);

  useEffect(() => {
    calculateLineCount();
    window.addEventListener('resize', calculateLineCount);
    setIsShowStampMent(isPaintedStamp);
    return () => {
      window.removeEventListener('resize', calculateLineCount);
    };
  }, []);

  return (
    <>
      <div className={S.container}>
        <div className={S.grid}>
          <div className={S.textItem}>
            {diaryDate.getFullYear()}년 {diaryDate.getMonth() + 1}월{' '}
            {diaryDate.getDate()}일 {DAY[diaryDate.getDay()]}
          </div>
          <div className={S.textItem}>제목: {diaryInfo.title}</div>
          <div className={S.iconItem}>
            <div className={S.icon}>
              <div className={S.iconText}>그날의 날씨</div>
              <div className={S.iconDiv}>
                <WeatherIcon className={S.iconImg} />
              </div>
            </div>
            <div className={S.icon}>
              <div className={S.iconText}>그날의 기분</div>
              <div className={S.iconDiv}>
                <MoodIcon className={S.iconImg} />
              </div>
            </div>
          </div>
        </div>
        <div className={S.slide}>
          <ImgSwiper imgList={diaryInfo.images} />
        </div>
        <div className={S.body}>
          <div ref={textRef}>{diaryInfo.content}</div>
          <div style={{ height: '3rem' }}></div>
          <div className={S.text}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span style={{ marginLeft: '0.5rem' }}>
              장소: {diaryInfo.location.state || ''}
            </span>
            <FontAwesomeIcon icon={faUser} style={{ marginLeft: '1rem' }} />
            <span
              style={{ marginLeft: '0.5rem' }}
              className={S.hover}
              onClick={handleAuthorClick}
            >
              작성자: {diaryInfo.user.username || ''}
            </span>
          </div>
          <div className={S.lineList}>{drawLine()}</div>
          <div className={S.stamp}>
            <div
              className={`${S.stampText} ${isShowStampMent && S.displayNone}`}
            >
              스탬프를 찍어보세요!
            </div>
            <img
              src={stamp}
              alt="stamp"
              className={`${S.stampImg} ${isPaintedStamp && S.diaryPaintStamp}`}
              onClick={handleStampClick}
            ></img>
          </div>
        </div>
      </div>
      <div className={S.infoBox}>
        <div className={S.stampCount}>
          <img src={stamp} alt="stampCount" className={S.diaryStampbtn} />
          <span>{stampCount}</span>
        </div>
        <div className={S.diaryshare}>
          {diaryInfo.isPublic ? '공개' : '비공개'}
        </div>
        <div style={{ flexGrow: '1' }}></div>
        {isMyDiary && (
          <div className={S.editButtonBox}>
            <div className={S.editButton} onClick={goEditPage}>
              일기 수정하기
            </div>
            <div className={S.editButton} onClick={handleDeleteDiaryClick}>
              일기 삭제하기
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default DiaryBody;
