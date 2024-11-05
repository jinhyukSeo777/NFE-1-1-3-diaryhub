import { useEffect, useState } from 'react';
import * as styles from './EditDiary.css';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { DiaryResponseType, ImageType } from '../DiaryDetail';

export interface IPosition {
  latitude: number;
  longitude: number;
}

interface IData {
  diaryInfo: DiaryResponseType;
}

const EditDiary = () => {
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
  const location = useLocation() as { state: IData };

  // 비로그인 유저 필터
  useEffect(() => {
    const TOKEN = localStorage.getItem('authToken');
    if (!TOKEN) navigate('/error');
  });

  // 초기 일기 정보 설정
  useEffect(() => {
    const setData = async () => {
      const { diaryInfo } = location.state;
      if (!diaryInfo) {
        navigate('/error');
        return;
      }

      const images = await urlsToFiles(diaryInfo.images);

      setPosition({
        latitude: diaryInfo.location.coordinates.latitude,
        longitude: diaryInfo.location.coordinates.longitude,
      });
      setDiaryDate(new Date(diaryInfo.diaryDate));
      setWeather(diaryInfo.weather);
      setMood(diaryInfo.mood);
      setImages(images);
      setTitle(diaryInfo.title);
      setContent(diaryInfo.content);
      setIsPublic(diaryInfo.isPublic);
    };

    setData();
  }, [location.state, navigate]);

  // 제출에 필요한 요소 전부 있는지 확인
  useEffect(() => {
    const canSubmit =
      !!weather && !!mood && !!title && !!content && images.length !== 0;
    setCanSubmit(canSubmit);
  }, [weather, mood, images, title, content]);

  const urlsToFiles = async (images: ImageType[]) => {
    const urls = images.map((image) => image.url);
    // URL 배열을 File 객체 배열로 변환
    const filePromises = urls.map(async (url, index) => {
      const response = await fetch(url);
      const blob = await response.blob();
      // MIME 타입 추정 (Blob에서 추출됨)
      const mimeType = blob.type;
      // File 객체 생성, index를 파일명에 포함
      return new File([blob], `image_${index + 1}.${mimeType.split('/')[1]}`, {
        type: mimeType,
      });
    });

    // 모든 File 객체 반환
    return Promise.all(filePromises);
  };

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
    const {
      diaryInfo: { _id },
    } = location.state;
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
      .put(`${BASE_URL}/diaries/${_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // FormData 전송을 위한 헤더 설정
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then(() => navigate('/'))
      .catch((e) => console.log(e));
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.h2}>일기를 수정해주세요</h2>
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

export default EditDiary;
