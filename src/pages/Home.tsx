import { useEffect, useState } from 'react';
import MainMap from '../components/MainMap';
import { home, article, map } from '../styles/Home.css';
import ArticleArea from '../components/ArticleArea';
import SelectBox from '../components/SelectBox';

export interface Comment {
  _id: string;
  user: {
    _id: string;
    username: string;
  };
  content: string;
  createdAt: Date;
}

export interface Diary {
  _id: string;
  title: string;
  content: string;
  diaryDate: Date;
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
  createdAt: Date;
  isPublic: boolean;
  images: string[];
  likes: string[];
  comments: Comment[];
}

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [diaryData, setDiaryData] = useState<Diary[]>([]);
  const [filteredDiaries, setFilteredDiaries] = useState<Diary[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string>('');

  const options = [
    { value: '서울', label: '서울' },
    { value: '인천', label: '인천' },
    { value: '경기', label: '경기' },
    { value: '대전', label: '대전' },
    { value: '충청', label: '충청' },
    { value: '경상', label: '경상' },
    { value: '대구', label: '대구' },
    { value: '울산', label: '울산' },
    { value: '부산', label: '부산' },
    { value: '전라', label: '전라' },
    { value: '광주', label: '광주' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const token = process.env.REACT_APP_API_TOKEN;
      try {
        const response = await fetch(
          'https://port-0-nfe-1-1-3-diaryhub-backend-m2tsapjdb0fe072f.sel4.cloudtype.app/diaries/public-diaries',
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
          setFilteredDiaries(data);
        } else {
          setError('데이터를 가져오는 데 실패했습니다.');
        }
      } catch (err) {
        setError('데이터를 가져오는 데 오류가 발생했습니다.');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCurrentPosition({ latitude, longitude });
      },
      () => alert('위치 정보를 가져오는 데 실패했습니다.'),
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  }, []);

  // 지역별 검색
  useEffect(() => {
    const fetchDiariesByState = async () => {
      if (selectedState) {
        const token = process.env.REACT_APP_API_TOKEN;

        try {
          const response = await fetch(
            `https://port-0-nfe-1-1-3-diaryhub-backend-m2tsapjdb0fe072f.sel4.cloudtype.app/diaries/public-diaries/location/${selectedState}`,
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
            setFilteredDiaries(data);
          } else {
            setError('해당 주의 다이어리를 가져오는 데 실패했습니다.');
          }
        } catch (err) {
          setError('데이터를 가져오는 데 오류가 발생했습니다.');
        }
      } else {
        setFilteredDiaries(diaryData);
      }
    };

    fetchDiariesByState();
  }, [selectedState, diaryData]);

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const sortedDiaryData = currentPosition
    ? [...filteredDiaries]
        .sort((a, b) => {
          const distanceA = calculateDistance(
            currentPosition.latitude,
            currentPosition.longitude,
            a.location.coordinates.latitude,
            a.location.coordinates.longitude
          );
          const distanceB = calculateDistance(
            currentPosition.latitude,
            currentPosition.longitude,
            b.location.coordinates.latitude,
            b.location.coordinates.longitude
          );
          return distanceA - distanceB;
        })
        .slice(0, 5)
    : filteredDiaries;

  return (
    <div>
      <div className={home}>
        <section className={article}>
          <SelectBox options={options} onChange={setSelectedState} />
          <ArticleArea diaries={sortedDiaryData} />
        </section>
        <section className={map}>
          <MainMap
            latitude={currentPosition?.latitude || 37.5665}
            longitude={currentPosition?.longitude || 126.978}
            markers={sortedDiaryData.map((diary) => ({
              latitude: diary.location.coordinates.latitude,
              longitude: diary.location.coordinates.longitude,
              imageUrl: diary.images[0],
            }))}
          />
        </section>
      </div>
    </div>
  );
}
