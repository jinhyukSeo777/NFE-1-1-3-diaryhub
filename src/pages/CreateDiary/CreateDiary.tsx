import { useEffect, useState } from 'react';
import * as styles from './CreateDiary.css';
import InputDate from '../../components/common/CommonInput/InputDate/InputDate';
import InputTitle from '../../components/common/CommonInput/InputTitle/InputTitle';
import InputContent from '../../components/common/CommonInput/InputContent/InputContent';
import InputWeather from '../../components/common/CommonInput/InputWeather/InputWeather';
import InputMood from '../../components/common/CommonInput/InputMood/InputMood';
import InputBar from '../../components/common/CommonInput/InputBar/InputBar';
import CreateMap from '../../components/CreateMap/CreateMap';
import InputPublic from '../../components/common/CommonInput/InputPublic/InputPublic';
import InputImg from '../../components/common/CommonInput/InputImg/InputImg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface IPosition {
  latitude: number;

  longitude: number;
}

const CreateDiary = () => {
  const [position, setPosition] = useState<IPosition>({
    latitude: 37.566826,

    longitude: 126.9786567,
  });

  const [diaryDate, setDiaryDate] = useState(new Date());

  const [weather, setWeather] = useState('');

  const [mood, setMood] = useState('');

  const [images, setImages] = useState<File[]>([]);

  const [title, setTitle] = useState('');

  const [content, setContent] = useState('');

  const [isPublic, setIsPublic] = useState(false);

  const [canSubmit, setCanSubmit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const TOKEN = localStorage.getItem('authToken');

    if (!TOKEN) navigate('/login');
  });

  useEffect(() => {
    const canSubmit =
      !!weather && !!mood && !!title && !!content && images.length !== 0;

    setCanSubmit(canSubmit);
  }, [weather, mood, images, title, content]);

  const getRegionName = async () => {
    const apiKey = process.env.REACT_APP_KAKAOMAP_API_KEY;

    const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${position.longitude}&y=${position.latitude}&input_coord=WGS84`;

    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${apiKey}`, // 인증 헤더 추가
      },
    });

    const data = await response.json();

    // 시군구 정보 가져오기

    if (data.documents && data.documents.length > 0) {
      const address = data.documents[0].address;

      return address.region_1depth_name;
    } else {
      return '';
    }
  };

  const handleSubmit = async () => {
    setCanSubmit(false);

    const state = await getRegionName();

    const TOKEN = localStorage.getItem('authToken');

    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // FormData 생성 및 파일 추가

    const formData = new FormData();

    images.forEach((file) => {
      formData.append('images', file); // images라는 필드명으로 파일 배열 추가
    });

    // 다른 텍스트 데이터 추가

    formData.append('title', title);

    formData.append('content', content);

    formData.append('mood', mood);

    formData.append('weather', weather);

    formData.append('diaryDate', diaryDate.toISOString());

    formData.append('state', state);

    formData.append('latitude', position.latitude.toString());

    formData.append('longitude', position.longitude.toString());

    formData.append('isPublic', isPublic.toString());

    axios

      .post(`${BASE_URL}/diaries`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // FormData 전송을 위한 헤더 설정

          Authorization: `Bearer ${TOKEN}`,
        },
      })

      .then(() => navigate('/'))

      .catch(() => navigate('/error'));
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.h2}>일기를 작성해주세요</h2>

        <InputBar setPosition={setPosition} />

        <CreateMap position={position} setPosition={setPosition} />

        <InputDate diaryDate={diaryDate} setDiaryDate={setDiaryDate} />

        <InputWeather weather={weather} setWeather={setWeather} />

        <InputMood mood={mood} setMood={setMood} />

        <InputImg images={images} setImages={setImages} />

        <InputTitle title={title} setTitle={setTitle} />

        <InputContent content={content} setContent={setContent} />

        <InputPublic isPublic={isPublic} setIsPublic={setIsPublic} />

        <button
          disabled={!canSubmit}
          className={styles.submitbtn}
          onClick={handleSubmit}
        >
          작성 완료
        </button>
      </div>
    </main>
  );
};

export default CreateDiary;
