import axios from 'axios';
import { Diary } from '../types/diaryTypes';
import { calculateDistance } from './calculateDistance';
import { getRegionName } from './regionService';

export const fetchData = async (skip: number): Promise<Diary[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/diaries/public-diaries?limit=10&skip=${skip}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error('데이터를 가져오는 데 실패했습니다.');
  }
};

export const fetchDiariesByState = async (
  selectedState: string,
  currentPosition: { latitude: number; longitude: number } | null
): Promise<Diary[]> => {
  let url = `${process.env.REACT_APP_API_BASE_URL}/diaries/public-diaries/location/${selectedState}?limit=10&skip=0`;

  if (selectedState === '현재 위치' && currentPosition) {
    const { latitude, longitude } = currentPosition;
    const region = await getRegionName({ latitude, longitude });
    url = `${process.env.REACT_APP_API_BASE_URL}/diaries/public-diaries/location/${region}?limit=10&skip=0`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('데이터를 가져오는 데 실패했습니다.');
  }

  const data: Diary[] = await response.json();

  if (selectedState === '현재 위치' && currentPosition) {
    const { latitude, longitude } = currentPosition;
    return data
      .map((diary) => ({
        ...diary,
        distance: calculateDistance(
          latitude,
          longitude,
          diary.location.coordinates.latitude,
          diary.location.coordinates.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);
  }

  return data;
};

export const fetchPublicDiariesByRegion = async (
  state: string,
  skip: number
) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/diaries/public-diaries/location/${state}?limit=10&skip=${skip}`
  );
  return response.data;
};
