import { Coordinates } from '../types/diaryTypes';

export const getRegionName = async ({ latitude, longitude }: Coordinates) => {
  const apiKey = process.env.REACT_APP_KAKAOMAP_API_KEY;
  const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`;

  const response = await fetch(url, {
    headers: {
      Authorization: `KakaoAK ${apiKey}`, // 인증 헤더 추가
    },
  });
  const data = await response.json();

  // 시군구 정보 가져오기
  if (data.documents && data.documents.length > 0) {
    const region = data.documents[0].address.region_1depth_name;
    const resolvedRegion = resolveRegionValue(region);
    return resolvedRegion;
  } else {
    return '';
  }
};

const resolveRegionValue = (state: string) => {
  if (state === '강원특별자치도') return '강원';
  if (state === '세종특별자치시') return '세종';
  if (state === '제주특별자치도') return '제주';
  if (state === '충남' || state === '충북') return '충청';
  if (state === '경남' || state === '경북') return '경상';
  if (state === '전남' || state === '전북특별자치도') return '전라';
  return state;
};
