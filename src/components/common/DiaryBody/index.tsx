import stamp from '../../../assets/icons/stamp.svg';
import ImgSwiper from '../ImgSwiper';
import * as S from './styles.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Diary } from '../../../types/diaryTypes';
import { DAY, DIARY_ICON } from '../../../constants/diary';
import { deleteDiary, paintStamp } from '../../../utils/diaryApi';
import getUserId from '../../../utils/getUserId';

interface diaryProps {
  diaryInfo: Diary;
  isMyDiary: boolean;
}

const DiaryBody = ({ diaryInfo, isMyDiary }: diaryProps) => {
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

  const drawLine = () => {
    const elements = [];
    for (let i = 0; i < lineCount; i++) {
      elements.push(<div className={S.diaryLineItem} key={i}></div>);
    }
    return elements;
  };

  const goEditPage = () => {
    navigate('/editdiary', { state: { diaryInfo } });
  };

  const onStampClick = () => async () => {
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

  const onDeleteDiaryClick = () => async () => {
    deleteDiary(diaryInfo._id);
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
    setIsShowStampMent(isPaintedStamp);
    return () => {
      window.removeEventListener('resize', calculateLineCount);
    };
  }, []);

  const handleAuthorClick = () => {
    const username = diaryInfo.user.username;
    if (username) {
      navigate(`/writerdiary/${username}`);
    }
  };

  return (
    <>
      <div className={S.diaryContainer}>
        <div className={S.diaryTitleBox}>
          <div className={S.diaryTitleText}>
            {diaryDate.getFullYear()}년 {diaryDate.getMonth() + 1}월{' '}
            {diaryDate.getDate()}일 {DAY[diaryDate.getDay()]}
          </div>
          <div className={S.diaryTitleText}>제목: {diaryInfo.title}</div>
          <div className={S.diaryTitleIcon}>
            <div className={S.diaryIconInfo}>
              <div className={S.diaryIconTitle}>그날의 날씨</div>
              <div className={S.diaryIcon}>
                <img
                  className={S.diaryIconImg}
                  src={DIARY_ICON[diaryInfo.weather]}
                  alt="weather"
                ></img>
              </div>
            </div>
            <div className={S.diaryIconInfo}>
              <div className={S.diaryIconTitle}>그날의 기분</div>
              <div className={S.diaryIcon}>
                <img
                  className={S.diaryIconImg}
                  src={DIARY_ICON[diaryInfo.mood]}
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
          <div className={S.diaryEtc}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span style={{ marginLeft: '0.5rem' }}>
              장소: {diaryInfo.location.state || ''}
            </span>
            <FontAwesomeIcon icon={faUser} style={{ marginLeft: '1rem' }} />
            <span
              style={{ marginLeft: '0.5rem' }}
              className={S.DiaryAuthor}
              onClick={handleAuthorClick}
            >
              작성자: {diaryInfo.user.username || ''}
            </span>
          </div>
          <div className={S.diaryLine}>{drawLine()}</div>
          <div className={S.diaryStamp}>
            <div
              className={`${S.diaryStampText} ${isShowStampMent && S.displayNone}`}
            >
              스탬프를 찍어보세요!
            </div>
            <img
              src={stamp}
              alt="stamp"
              className={`${S.diaryStampImage} ${isPaintedStamp && S.diaryPaintStamp}`}
              onClick={onStampClick()}
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
            <div className={S.diaryEditButton} onClick={onDeleteDiaryClick()}>
              일기 삭제하기
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default DiaryBody;
