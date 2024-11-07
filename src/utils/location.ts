interface LocationOption {
  value: string;
  label: string;
  latitude?: number;
  longitude?: number;
}

export const LOCATION_OPTIONS: LocationOption[] = [
  { value: '전체', label: '전체' },
  { value: '현재 위치', label: '현재 위치' },
  { value: '서울', label: '서울', latitude: 37.5665, longitude: 126.978 },
  { value: '인천', label: '인천', latitude: 37.4563, longitude: 126.7052 },
  { value: '경기', label: '경기', latitude: 37.2752, longitude: 127.0095 },
  { value: '대전', label: '대전', latitude: 36.3504, longitude: 127.3845 },
  { value: '충청', label: '충청', latitude: 36.6356, longitude: 127.4914 },
  { value: '경상', label: '경상', latitude: 36.5761, longitude: 128.5057 },
  { value: '대구', label: '대구', latitude: 35.8722, longitude: 128.6014 },
  { value: '울산', label: '울산', latitude: 35.5384, longitude: 129.3114 },
  { value: '부산', label: '부산', latitude: 35.1796, longitude: 129.0756 },
  { value: '전라', label: '전라', latitude: 35.8218, longitude: 127.148 },
  { value: '광주', label: '광주', latitude: 35.1595, longitude: 126.8526 },
];

export const DEFAULT_COORDINATES = {
  latitude: 37.5665,
  longitude: 126.978,
} as const;
