import { useEffect, useRef, useState } from 'react';
import MainMap from '../../components/MainMap/MainMap';
import { home, article, map, homeCon, container } from './Home.css';
import ArticleArea from '../../components/Article/ArticleArea';
import SelectBox from '../../components/SelectBox/SelectBox';
import TitleBanner from '../../components/TitleBanner/TitleBanner';
import { LOCATION_OPTIONS } from '../../utils/location';
import { fetchPublicDiariesByRegion } from '../../utils/getDiary';
import { Diary } from '../../types/diaryTypes';
import { fetchGeolocation } from '../../utils/geolocation';
import { DEFAULT_COORDINATES } from '../../constants/location';

export default function Home() {
  const [myPosition, setMyPosition] = useState(DEFAULT_COORDINATES);
  const [myRegion, setMyRegion] = useState('');
  const [diaryData, setDiaryData] = useState<Diary[]>([]);
  const [region, setRegion] = useState('전체');
  const [skip, setSkip] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const initialRender = useRef(true); // 초기 렌더링 여부를 확인하는 ref

  const getData = async (region: string, skip: number) => {
    const data = await fetchPublicDiariesByRegion(region, skip);
    if (data.length < 10) {
      setHasMoreData(false);
    }
    setDiaryData((prev) => [...prev, ...data]);
  };

  const fetchMoreData = () => {
    getData(region, skip + 10);
    setSkip((prev) => prev + 10);
  };

  const setResolvedRegion = (value: string) => {
    if (value === '현재 위치') setRegion(myRegion);
    else setRegion(value);
  };

  // 지역 변경시 호출 되는 함수
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false; // 초기 렌더링이 끝났음을 표시
      return; // 초기 렌더링일 때는 호출하지 않음
    }

    setSkip(0); // pagination 초기화
    setDiaryData([]); // 일기 데이터 초기화
    setHasMoreData(true);
    getData(region, 0); // 새로운 데이터 호출
  }, [region]);

  // 내 위치 저장
  useEffect(() => {
    fetchGeolocation(
      (position, region) => {
        setMyPosition(position);
        setMyRegion(region);
      },
      () => alert('위치 정보를 가져오는 데 실패했습니다.')
    );
  }, []);

  return (
    <div className={container}>
      <TitleBanner
        title="모두의 일기"
        subtitle="누군가의 하루를 함께 느껴보세요"
      />
      <div className={homeCon}>
        <SelectBox options={LOCATION_OPTIONS} onChange={setResolvedRegion} />
        <div className={home}>
          <section className={article}>
            <ArticleArea
              diaries={diaryData}
              fetchMoreData={fetchMoreData}
              hasMoreData={hasMoreData}
            />
          </section>
          <section className={map}>
            <MainMap
              latitude={myPosition.latitude}
              longitude={myPosition.longitude}
              markers={diaryData.map((diary) => ({
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
