import { useState } from 'react';
import { Position } from '../types/diaryTypes';
import { DEFAULT_COORDINATES } from '../constants/location';

const useLocationAndRegion = () => {
  const [position, setPosition] = useState<Position>(DEFAULT_COORDINATES);
  const [region, setRegion] = useState('서울');

  return { position, setPosition, region, setRegion };
};

export default useLocationAndRegion;
