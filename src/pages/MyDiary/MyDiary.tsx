import { useEffect, useState } from 'react';
import { Diary } from '../../types/diaryTypes';
import { home } from '../Home/Home.css';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import { diaryAPI } from '../../utils/getMyDiary';
import { useNavigate } from 'react-router-dom';
import DiaryContent from '../../components/DiaryContent';

const MyDiary = () => {
  const [diaryData, setDiaryData] = useState<Diary[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await diaryAPI.getMyDiaries();
        setDiaryData(data);
      } catch (error) {
        navigate('/error');
      }
    };

    fetchData();
  }, [navigate]);
  return (
    <>
      <TitleBanner title="나만의 일기" subtitle="나의 하루를 공유해보세요" />
      <div className={home}>
        <DiaryContent diaryData={diaryData} />
      </div>
    </>
  );
};

export default MyDiary;
