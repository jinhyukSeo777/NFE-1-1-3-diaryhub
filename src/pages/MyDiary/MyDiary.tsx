import { useEffect, useState } from 'react';
import { Diary } from '../../types/diaryTypes';
import Card from '../../components/CommonCard/Card';
import { mydiary, noteCon } from './MyDiary.css';
import { home } from '../Home/Home.css';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import note from '../../assets/note.svg';
import { diaryAPI } from '../../utils/getMyDiary';

const MyDiary = () => {
  const [diaryData, setDiaryData] = useState<Diary[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await diaryAPI.getMyDiaries();
        setDiaryData(data);
      } catch {
        setError('데이터를 가져오는 데 오류가 발생했습니다.');
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <TitleBanner title="나만의 일기" subtitle="나의 하루를 공유해보세요" />
      <div className={home}>
        {diaryData.length === 0 ? (
          <div style={{ marginTop: '13rem' }} className={noteCon}>
            <img src={note} alt="note" />
            <p>작성한 일기가 없습니다.</p>
          </div>
        ) : (
          <ul className={mydiary}>
            {diaryData.map((diary) => (
              <Card key={diary._id} diary={diary} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MyDiary;
