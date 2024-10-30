import { useParams } from 'react-router-dom';
import Diary from '../../components/common/Diary';
import DiaryComment from '../../components/common/DiaryComment';
import * as S from './styles.css';
import stamp from '../../assets/stamp.svg';
import { useEffect, useState } from 'react';
import getDiaryDetail from '../../utils/getDiaryDetail';
import getDiaryComments from '../../utils/getDiaryComments';

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

  useEffect(() => {
    const fetchData = async () => {
      if (param.id) {
        const diaryInfo = await getDiaryDetail(param.id);
        const commentInfo = await getDiaryComments(param.id);
        setDiaryInfo(diaryInfo);
        setDiaryComments(commentInfo);
        console.log(diaryInfo);
        console.log(commentInfo);
      }
    };
    fetchData();
  }, []);

  return diaryInfo ? (
    <div className={S.diaryDetailWrapper}>
      <h2>
        <span>{param.id}</span> 번 일기 상세 페이지
      </h2>
      <Diary diaryInfo={diaryInfo} />
      <div className={S.diaryInfoButton}>
        <div className={S.diaryStampCount}>
          <img src={stamp} alt="stampCount" className={S.diaryStamp} />
          <span>{diaryInfo.likes.length}</span>
        </div>
        <div className={S.diaryshare}>
          {diaryInfo.isPublic ? '공개' : '비공개'}
        </div>
        <div style={{ flexGrow: '1' }}></div>
        <div className={S.diaryEditButton}>일기 수정하기</div>
      </div>
      <DiaryComment commentsList={diaryComments} />
    </div>
  ) : (
    <div>Loading</div>
  );
};
export default DiaryDetail;
