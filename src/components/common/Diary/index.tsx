import { DiaryResponseType } from '../../../pages/DiaryDetail';
import ImgSwiper from '../ImgSwiper';
import * as S from './styles.css';
import feel1 from '../../../assets/feel1.svg';
import sun from '../../../assets/sun.svg';
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
  return (
    <div className={S.diaryWrapper}>
      <div className={S.diaryTitle}>
        <div className={S.diaryTitleText}>
          {date.getFullYear()} 년 {date.getMonth() + 1} 월 {date.getDate()} 일{' '}
          {day[date.getDay()]}
        </div>
        <div className={S.diaryTitleText}>제목: {diaryInfo.title}</div>
        <div className={S.diaryMood}>
          <div>
            <div className={S.diaryMoodTitle}>오늘의 기분</div>
            <div className={S.diaryIcon}>
              <img className={S.diaryIconImg} src={feel1} alt="feel"></img>
            </div>
          </div>
          <div>
            <div className={S.diaryMoodTitle}>오늘의 날씨</div>
            <div className={S.diaryIcon}>
              <img className={S.diaryIconImg} src={sun} alt="weather"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={S.diaryslide}>
        <ImgSwiper imgList={diaryInfo.images} />
      </div>
      <div className={S.diaryBody}>
        <p className={S.diaryBodyText}>{diaryInfo.content}</p>
      </div>
    </div>
  );
};
export default Diary;
