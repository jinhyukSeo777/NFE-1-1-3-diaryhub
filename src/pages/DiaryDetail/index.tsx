import { useParams } from 'react-router-dom';
import Diary from '../../components/common/Diary';
import DiaryComment from '../../components/common/DiaryComment';
import { diaryDetailWrapper } from './styles.css';
const DiaryDetail = () => {
  const param: { id?: string } = useParams();
  const diaryInfo = {
    title: '일기 제목임',
    date: '2020-10-10',
    imgList: [
      'https://via.placeholder.com/300.jpg',
      'https://via.placeholder.com/400.jpg',
      'https://via.placeholder.com/500.jpg',
      'https://via.placeholder.com/200x300.jpg',
      'https://via.placeholder.com/500x300.jpg',
    ],
    mood: '기분',
    weather: '날씨',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi repellendus, unde incidunt exercitationem mollitia sequi quia, neque beatae perferendis consectetur illum fuga excepturi soluta libero aliquid ea ipsa laudantium!',
  };
  return (
    <div className={diaryDetailWrapper}>
      <h2>
        <span>{param.id}</span> 번 일기 상세 페이지
      </h2>
      <Diary diaryInfo={diaryInfo} />
      <DiaryComment />
    </div>
  );
};
export default DiaryDetail;
