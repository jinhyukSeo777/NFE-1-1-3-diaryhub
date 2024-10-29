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
  const [title, SetTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    const canSubmit = !!title && !!content && !!weather && !!mood;
    setCanSubmit(canSubmit);
  }, [content, mood, title, weather]);

  const getRegionName = async () => {
    const apiKey = process.env.REACT_APP_KAKAO_REST_API_KEY;
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
    const state = await getRegionName();
    console.log(
      position,
      state,
      diaryDate,
      weather,
      mood,
      images,
      title,
      content,
      isPublic
    );
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
        <InputTitle title={title} SetTitle={SetTitle} />
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
