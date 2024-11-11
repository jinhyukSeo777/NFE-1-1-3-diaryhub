import { useEffect, useState } from 'react';
import { Coordinates } from '@interfaces/diaryTypes';
import { DEFAULT_COORDINATES } from '../constants/location';
import { fetchMyGeolocation } from '@utils/geolocation';

const useLocationAndRegion = () => {
  const [position, setPosition] = useState<Coordinates>(DEFAULT_COORDINATES);
  const [region, setRegion] = useState('서울');

  // 내 위치 저장
  useEffect(() => {
    fetchMyGeolocation(
      (position, region) => {
        setPosition(position);
        setRegion(region);
      },
      () => alert('위치 정보를 가져오는 데 실패했습니다.')
    );
  }, []);

  return { position, setPosition, region, setRegion };
};

export default useLocationAndRegion;
