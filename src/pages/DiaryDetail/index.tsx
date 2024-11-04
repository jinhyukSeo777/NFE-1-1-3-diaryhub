import { useParams } from 'react-router-dom';
import Diary from '../../components/Diary';
import DiaryComment from '../../components/DiaryComment';
import * as S from './styles.css';
import { useEffect, useState } from 'react';
import getDiaryDetail from '../../utils/getDiaryDetail';
import getDiaryComments from '../../utils/getDiaryComments';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import ErrorPage from '../Error/Error';

export type ImageType = {
  public_id: string;
  url: string;
  _id: string;
};
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
  images: ImageType[];
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
  const [date, setDate] = useState('');
  const [diaryInfo, setDiaryInfo] = useState<
    DiaryResponseType | null | undefined
  >();
  const [diaryComments, setDiaryComments] = useState<
    DiaryCommentResponseType[] | null | undefined
  >();
  const [isMyDiary, setIsMyDiary] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!param.id) return;
      const diaryInfo: DiaryResponseType | null = await getDiaryDetail(
        param.id
      );
      const diaryComments: DiaryCommentResponseType[] | null =
        await getDiaryComments(param.id);
      setDiaryInfo(diaryInfo);
      setDiaryComments(diaryComments);

      if (diaryInfo && diaryComments) {
        const writer = diaryInfo.user._id;
        const token = localStorage.getItem('authToken');
        const isMine =
          token && JSON.parse(atob(token.split('.')[1])).userId === writer;
        if (isMine) {
          setIsMyDiary(true);
        }
        if (!diaryInfo.isPublic && !isMine) {
          setDiaryInfo(null);
          setDiaryComments(null);
        }
        const date = new Date(diaryInfo.diaryDate);
        setDate(date.getMonth() + 1 + '월' + date.getDate() + '일의 일기');
      }
    };

    fetchData();
  }, []);

  return diaryInfo && diaryComments && param.id ? (
    <div className={S.diaryDetailWrapper}>
      <TitleBanner
        title={date}
        subtitle="생각과 감정을 기록한 일기를 만나보세요"
      />
      <Diary diaryInfo={diaryInfo} isMyDiary={isMyDiary} />
      <DiaryComment
        commentsList={diaryComments}
        setDiaryComments={setDiaryComments}
        diaryId={param.id}
      />
    </div>
  ) : diaryInfo === null || diaryComments === null ? (
    <ErrorPage></ErrorPage>
  ) : (
    <></>
  );
};
export default DiaryDetail;
