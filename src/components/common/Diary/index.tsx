import { DiaryResponseType } from '../../../pages/DiaryDetail';
import ImgSwiper from '../ImgSwiper';
import {
  diaryWrapper,
  diaryTitle,
  diaryTitleText,
  diaryMood,
  diaryslide,
  diaryBody,
  diaryBodyText,
} from './styles.css';
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
    <div className={diaryWrapper}>
      <div className={diaryTitle}>
        <div className={diaryTitleText}>
          {date.getFullYear()} 년 {date.getMonth() + 1} 월 {date.getDate()} 일{' '}
          {day[date.getDay()]}
        </div>
        <div className={diaryTitleText}>{diaryInfo.title}</div>
        <div className={diaryMood}>
          {diaryInfo.mood} {diaryInfo.weather}
        </div>
      </div>
      <div className={diaryslide}>
        <ImgSwiper imgList={diaryInfo.images} />
      </div>
      <div className={diaryBody}>
        <p className={diaryBodyText}>{diaryInfo.content}</p>
      </div>
    </div>
  );
};
export default Diary;
