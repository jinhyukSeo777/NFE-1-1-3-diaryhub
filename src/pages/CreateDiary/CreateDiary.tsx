import { useState } from 'react';
import * as styles from './CreateDiary.css';
import InputBar from '@components/common/CommonInput/InputBar/InputBar';
import CreateMap from '@components/common/CreateMap/CreateMap';
import { useNavigate } from 'react-router-dom';
import useLocationAndRegion from '@hooks/useLocationAndRegion';
import useAuthFilter from '@hooks/useAuthFilter';
import useFormValidation from '@hooks/useFormValidation';
import { createDiary } from '@utils/diaryApi';
import DiaryForm from '@components/common/DiaryForm/DiaryForm';

const CreateDiary = () => {
  const { position, setPosition, region, setRegion } = useLocationAndRegion();
  const [diaryDate, setDiaryDate] = useState(new Date());
  const [weather, setWeather] = useState('');
  const [mood, setMood] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // 비로그인 유저 필터
  useAuthFilter('/error');

  const canSubmit = useFormValidation({
    weather,
    mood,
    images,
    title,
    content,
  });

  const handleSubmit = async () => {
    setIsLoading(true);

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
    formData.append('state', region);
    formData.append('latitude', position.latitude.toString());
    formData.append('longitude', position.longitude.toString());
    formData.append('isPublic', isPublic.toString());

    try {
      await createDiary(formData);
      navigate('/');
    } catch (error) {
      navigate('/error');
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.h2}>일기를 작성해주세요</h2>
        <InputBar setPosition={setPosition} setRegion={setRegion} />
        <CreateMap
          position={position}
          setPosition={setPosition}
          setRegion={setRegion}
        />
        <DiaryForm
          diaryDate={diaryDate}
          setDiaryDate={setDiaryDate}
          weather={weather}
          setWeather={setWeather}
          mood={mood}
          setMood={setMood}
          images={images}
          setImages={setImages}
          title={title}
          setTitle={setTitle}
          content={content}
          setContent={setContent}
          isPublic={isPublic}
          setIsPublic={setIsPublic}
        />
        <button
          disabled={!canSubmit}
          className={styles.submitbtn}
          onClick={handleSubmit}
        >
          {isLoading ? 'Loading...' : '작성 완료'}
        </button>
      </div>
    </main>
  );
};

export default CreateDiary;
