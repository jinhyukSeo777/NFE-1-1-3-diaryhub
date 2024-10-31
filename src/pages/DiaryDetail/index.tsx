import { useParams } from 'react-router-dom';
import Diary from '../../components/common/Diary';
import DiaryComment from '../../components/common/DiaryComment';
import * as S from './styles.css';
import { useEffect, useState } from 'react';
import getDiaryDetail from '../../utils/getDiaryDetail';
import getDiaryComments from '../../utils/getDiaryComments';
import TitleBanner from '../../components/TitleBanner/TitleBanner';

export type DiaryResponseType = {
  _id: string;
  title: string;
  content: string;
  diaryDate: string;
  user: {
    _id: string;
    username: string;
  };
  location: {
    state: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  mood: string;
  weather: string;
  createdAt: string;
  isPublic: boolean;
  likes: string[];
  images: string[];
  address: string;
};
export type DiaryCommentResponseType = {
  _id: string;
  user: {
    _id: string;
    username: string;
  };
  content: string;
  createdAt: string;
};
const DiaryDetail = () => {
  const param: { id?: string } = useParams();
  const [diaryInfo, setDiaryInfo] = useState<DiaryResponseType>();
  const [diaryComments, setDiaryComments] =
    useState<DiaryCommentResponseType[]>();
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (param.id) {
        const diaryInfo = await getDiaryDetail(param.id);
        const commentInfo = await getDiaryComments(param.id);
        setDiaryInfo(diaryInfo);
        setDiaryComments(commentInfo);
        const date = new Date(diaryInfo?.createdAt);
        setDate(date.getMonth() + '월' + date.getDate() + '일의 일기');
      }
    };
    fetchData();
  }, []);
  return diaryInfo ? (
    <div className={S.diaryDetailWrapper}>
      <TitleBanner
        title={date}
        subtitle="생각과 감정을 기록한 일기를 만나보세요"
      />
      <Diary diaryInfo={diaryInfo} />
      <DiaryComment commentsList={diaryComments} diaryId={param.id} />
    </div>
  ) : (
    <div>Loading</div>
  );
};
export default DiaryDetail;
