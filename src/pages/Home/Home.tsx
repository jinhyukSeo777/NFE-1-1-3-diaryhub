import { useEffect, useState } from 'react';
import MainMap from '../../components/MainMap/MainMap';
import { home, article, map, homeCon, container } from './Home.css';
import ArticleArea from '../../components/Article/ArticleArea';
import SelectBox from '../../components/SelectBox/SelectBox';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import { LOCATION_OPTIONS, DEFAULT_COORDINATES } from '../../utils/location';
import { fetchData, fetchDiariesByState } from '../../utils/getDiary';
import { Diary } from '../../types/diaryTypes';
import { fetchGeolocation } from '../../utils/geolocation';

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [diaryData, setDiaryData] = useState<Diary[]>([]);
  const [filteredDiaries, setFilteredDiaries] = useState<Diary[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string>('');

  const getDiaryData = async () => {
    try {
      const data = await fetchData();
      setDiaryData(data);
      setFilteredDiaries(data);
    } catch (err) {
      setError('데이터를 가져오는 데 오류가 발생했습니다.');
    }
  };

  useEffect(() => {
    if (selectedState === '전체') {
      getDiaryData();
    }
  }, [selectedState]);

  useEffect(() => {
    fetchGeolocation(
      (position, region) => {
        setCurrentPosition(position);
        setSelectedState(region);
      },
      () => alert('위치 정보를 가져오는 데 실패했습니다.')
    );
  }, []);

  // 지역별 검색
  useEffect(() => {
    const diaryState = async () => {
      try {
        const data = await fetchDiariesByState(selectedState, currentPosition);
        setFilteredDiaries(data);
      } catch (err) {
        setError('데이터를 가져오는 데 오류가 발생했습니다.');
      }
    };

    diaryState();
  }, [selectedState, currentPosition]);

  const sortedDiaryData = [...filteredDiaries].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return dateB.getTime() - dateA.getTime();
  });

  // 선택된 지역에 따라 지도 위치 변경
  const mapLatitude =
    selectedState === '현재 위치' && currentPosition
      ? currentPosition.latitude
      : LOCATION_OPTIONS.find((opt) => opt.value === selectedState)?.latitude ||
        DEFAULT_COORDINATES.latitude;

  const mapLongitude =
    selectedState === '현재 위치' && currentPosition
      ? currentPosition.longitude
      : LOCATION_OPTIONS.find((opt) => opt.value === selectedState)
          ?.longitude || DEFAULT_COORDINATES.longitude;

  return (
    <div className={container}>
      <TitleBanner
        title="모두의 일기"
        subtitle="누군가의 하루를 함께 느껴보세요"
      />
      <div className={homeCon}>
        <SelectBox options={LOCATION_OPTIONS} onChange={setSelectedState} />
        <div className={home}>
          <section className={article}>
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
                imageUrl: diary.images[0].url,
                id: diary._id,
              }))}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
