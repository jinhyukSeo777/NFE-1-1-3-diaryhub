import { useEffect, useState } from 'react';
import { Diary } from '../Home/Home';
import Card from '../../components/CommonCard/Card';
import { mydiary, noteCon } from './MyDiary.css';
import { home } from '../Home/Home.css';
import TitleBanner from '../../components/TitleBanner';
import note from '../../assets/note.svg';
const MyDiary = () => {
  const [diaryData, setDiaryData] = useState<Diary[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getToken = () => {
    return localStorage.getItem('authToken');
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}diaries/my-diaries`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setDiaryData(data);
        } else {
          setError('데이터를 가져오는 데 실패했습니다.');
        }
      } catch (err) {
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
          <div className={noteCon}>
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
