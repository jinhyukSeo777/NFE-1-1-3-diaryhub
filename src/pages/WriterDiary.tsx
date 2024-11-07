import { useEffect, useState } from 'react';
import { Diary } from '../types/diaryTypes';
import { home } from './Home/Home.css';
import TitleBanner from '../components/TitleBanner/TitleBanner';
import { getWriterApi } from '../utils/getWriterDiary';
import { useNavigate, useParams } from 'react-router-dom';
import DiaryContent from '../components/DiaryContent';

const WriterDiary = () => {
  const { username } = useParams<{ username: string }>();
  const [diaryData, setDiaryData] = useState<Diary[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        try {
          const data = await getWriterApi.getMyDiaries(username);
          setDiaryData(data);
        } catch (error) {
          navigate('/error');
        }
      }
    };

    fetchData();
  }, [username, navigate]);

  return (
    <>
      <TitleBanner
        title={`${username}의 일기`}
        subtitle={`${username}님의 일상을 만나보세요`}
      />
      <div className={home}>
        <DiaryContent diaryData={diaryData} />
      </div>
    </>
  );
};

export default WriterDiary;
