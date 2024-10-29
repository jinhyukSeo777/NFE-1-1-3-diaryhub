import { useParams } from 'react-router-dom';
import Diary from '../../components/common/Diary';
import DiaryComment from '../../components/common/DiaryComment';
import * as S from './styles.css';
import stamp from '../../assets/stamp.svg';

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
  const diaryInfo: DiaryResponseType = {
    _id: '123',
    title: 'title',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi repellendus, unde incidunt exercitationem mollitia sequi quia, neque beatae perferendis consectetur illum fuga excepturi soluta libero aliquid ea ipsa laudantium!',
    diaryDate: '2024-10-21T12:00:00Z',
    user: {
      _id: 'user1',
      username: 'username',
    },
    location: {
      state: '경기도',
      coordinates: {
        latitude: 123,
        longitude: 123,
      },
    },
    mood: 'feel1',
    weather: 'sun',
    createdAt: '2024-10-21T12:00:00Z',
    isPublic: true,
    likes: ['user1', 'user2', 'user3'],
    images: [
      'https://via.placeholder.com/300.jpg',
      'https://via.placeholder.com/400.jpg',
      'https://via.placeholder.com/500.jpg',
      'https://via.placeholder.com/200x300.jpg',
      'https://via.placeholder.com/500x300.jpg',
    ],
    address: '서울 종로구 창경궁로 185',
  };
  const diaryComments: DiaryCommentResponseType[] = [
    {
      _id: '댓글ID',
      user: {
        _id: '사용자ID',
        username: '작성자이름1',
      },
      content: '댓글 내용1',
      createdAt: '2024-10-23T12:00:00.000Z',
    },
    {
      _id: '댓글ID',
      user: {
        _id: '사용자ID',
        username: '작성자이름2',
      },
      content: '댓글 내용2',
      createdAt: '2024-10-23T12:00:00.000Z',
    },
    {
      _id: '댓글ID',
      user: {
        _id: '사용자ID',
        username: '작성자이름3',
      },
      content: '댓글 내용3',
      createdAt: '2024-10-23T12:00:00.000Z',
    },
  ];
  return (
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
  );
};
export default DiaryDetail;
