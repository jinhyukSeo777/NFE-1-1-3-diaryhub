import { useEffect, useState } from 'react';
import MainMap from '../../components/MainMap/MainMap';
import { home, article, map } from './Home.css';
import ArticleArea from '../../components/Article/ArticleArea';
import SelectBox from '../../components/SelectBox/SelectBox';
import TitleBanner from '../../components/TitleBanner/TitleBanner';

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
    { value: '현재 위치', label: '현재 위치' },
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
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/diaries/public-diaries`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setDiaryData(data);
          setFilteredDiaries(data);
          console.log(data);
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
        setSelectedState('현재 위치');
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
      if (selectedState === '현재 위치') {
        setFilteredDiaries(diaryData);
        return;
      }

      if (selectedState) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/diaries/public-diaries/location/${selectedState}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
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

  // 선택된 지역에 따라 지도 위치 변경
  const mapLatitude =
    selectedState === '현재 위치' && currentPosition
      ? currentPosition.latitude
      : filteredDiaries.length > 0
        ? filteredDiaries[0].location.coordinates.latitude
        : currentPosition?.latitude || 37.5665;
  const mapLongitude =
    selectedState === '현재 위치' && currentPosition
      ? currentPosition.longitude
      : filteredDiaries.length > 0
        ? filteredDiaries[0].location.coordinates.longitude
        : currentPosition?.longitude || 126.978;

  return (
    <div>
      <TitleBanner
        title="모두의 일기"
        subtitle="누군가의 하루를 함께 느껴보세요"
      />
      <div className={home}>
        <section className={article}>
          <SelectBox options={options} onChange={setSelectedState} />
          <ArticleArea
            diaries={sortedDiaryData}
            selectedState={selectedState}
          />
        </section>
        <section className={map}>
          <MainMap
            latitude={mapLatitude}
            longitude={mapLongitude}
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
