import { useEffect, useState } from 'react';
import { Diary } from './Home';
import Card from '../components/CommonCard/Card';
import { mydiary } from '../styles/MyDiary.css';
import { home } from '../styles/Home.css';
const MyDiary = () => {
  const [diaryData, setDiaryData] = useState<Diary[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = process.env.REACT_APP_API_TOKEN;

      try {
        const response = await fetch(
          'https://port-0-nfe-1-1-3-diaryhub-backend-m2tsapjdb0fe072f.sel4.cloudtype.app/diaries/my-diaries',
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
    <div className={home}>
      <ul className={mydiary}>
        {diaryData.map((diary) => (
          <Card key={diary._id} diary={diary} />
        ))}
      </ul>
    </div>
  );
};

export default MyDiary;
