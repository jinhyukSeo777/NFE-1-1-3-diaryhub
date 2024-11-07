import { useEffect, useState } from 'react';
import * as styles from './EditDiary.css';
import InputBar from '../../components/common/CommonInput/InputBar/InputBar';
import CreateMap from '../../components/CreateMap/CreateMap';
import { useLocation, useNavigate } from 'react-router-dom';
import { Diary } from '../../types/diaryTypes';
import DiaryForm from '../../components/DiaryForm/DiaryForm';
import { editDiary } from '../../utils/diaryApi';
import useLocationAndRegion from '../../hooks/useLocationAndRegion';
import useAuthFilter from '../../hooks/useAuthFilter';
import useFormValidation from '../../hooks/useFormValidation';
import { urlsToFiles } from '../../utils/imageUtils';

interface IData {
  diaryInfo: Diary;
}

const EditDiary = () => {
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
  const location = useLocation() as { state: IData };

  // 비로그인 유저 필터
  useAuthFilter('/error');

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
      setRegion(diaryInfo.location.state);
      setDiaryDate(new Date(diaryInfo.diaryDate));
      setWeather(diaryInfo.weather);
      setMood(diaryInfo.mood);
      setImages(images);
      setTitle(diaryInfo.title);
      setContent(diaryInfo.content);
      setIsPublic(diaryInfo.isPublic);
    };

    setData();
  }, [location.state, navigate, setPosition, setRegion]);

  const canSubmit = useFormValidation({
    weather,
    mood,
    images,
    title,
    content,
  });

  const handleSubmit = async () => {
    setIsLoading(true);

    const {
      diaryInfo: { _id },
    } = location.state;

    // FormData 생성 및 파일 추가
    const formData = new FormData();
    images.forEach((file) => {
      formData.append('images', file);
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
      await editDiary(_id, formData);
      navigate(`/diarydetail/${_id}`);
    } catch (error) {
      navigate('/error');
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.h2}>일기를 수정해주세요</h2>
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

export default EditDiary;
