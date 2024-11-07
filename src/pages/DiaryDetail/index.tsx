import TitleBanner from '../../components/TitleBanner/TitleBanner';
import DiaryBody from '../../components/DiaryBody';
import DiaryComment from '../../components/DiaryComment';
import ErrorPage from '../Error/Error';
import * as S from './styles.css';
import { Diary, Comment } from '../../types/diaryTypes';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getDiaryDetail from '../../utils/getDiaryDetail';
import getDiaryComments from '../../utils/getDiaryComments';

const DiaryDetail = () => {
  const param: { id?: string } = useParams();
  const [date, setDate] = useState('');
  const [diaryInfo, setDiaryInfo] = useState<Diary | null | undefined>();
  const [diaryComments, setDiaryComments] = useState<
    Comment[] | null | undefined
  >();
  const [isMyDiary, setIsMyDiary] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!param.id) return;
      const diaryInfo: Diary | null = await getDiaryDetail(param.id);
      const diaryComments: Comment[] | null = await getDiaryComments(param.id);
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
  }, [param.id]);

  return diaryInfo && diaryComments && param.id ? (
    <div className={S.diaryDetailWrapper}>
      <TitleBanner
        title={date}
        subtitle="생각과 감정을 기록한 일기를 만나보세요"
      />
      <DiaryBody diaryInfo={diaryInfo} isMyDiary={isMyDiary} />
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
