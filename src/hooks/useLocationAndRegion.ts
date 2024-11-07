import { useState } from 'react';
import { Position } from '../types/diaryTypes';

const useLocationAndRegion = () => {
  const [position, setPosition] = useState<Position>({
    latitude: 37.566826,
    longitude: 126.9786567,
  });
  const [region, setRegion] = useState('서울');

  return { position, setPosition, region, setRegion };
};

export default useLocationAndRegion;
