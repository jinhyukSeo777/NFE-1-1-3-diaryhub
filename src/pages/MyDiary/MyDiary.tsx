import { useEffect, useRef, useState } from 'react';
import { Diary } from '@interfaces/diaryTypes';
import { home } from '../Home/Home.css';
import TitleBanner from '@components/common/TitleBanner/TitleBanner';
import { diaryAPI } from '@utils/diaryApi';
import DiaryContent from '@components/common/DiaryContent/DiaryContent';

const MyDiary = () => {
  const [diaryData, setDiaryData] = useState<Diary[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const initialRender = useRef(true); // 초기 렌더링 여부를 확인하는 ref
  const loadingRef = useRef<HTMLSpanElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const getData = async (skip: number) => {
    const data = await diaryAPI.getMyDiaries(skip);
    if (data.length < 9) {
      setHasMoreData(false);
    }
    setDiaryData((prev) => [...prev, ...data]);
  };

  const fetchMoreData = () => {
    getData(skip + 9);
    setSkip((prev) => prev + 9);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && initialRender.current) {
      initialRender.current = false; // 초기 렌더링이 끝났음을 표시
      return; // 초기 렌더링일 때는 호출하지 않음
    }

    getData(0);
  }, []);

  // loading이 화면에 보이면 추가 데이터 패칭하는 함수
  useEffect(() => {
    if (!loadingRef.current) return; // loadingRef가 없으면 실행하지 않음

    const currentLoadingRef = loadingRef.current;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreData();
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (currentLoadingRef) {
      observerRef.current.observe(currentLoadingRef);
    }

    return () => {
      if (currentLoadingRef && observerRef.current) {
        observerRef.current.unobserve(currentLoadingRef);
        observerRef.current.disconnect();
      }
    };
  }, [diaryData]);

  return (
    <>
      <TitleBanner title="나만의 일기" subtitle="나의 하루를 공유해보세요" />
      <div className={home}>
        <DiaryContent diaryData={diaryData} />
      </div>
      {hasMoreData && diaryData.length !== 0 && (
        <span
          style={{ marginBottom: '0.5rem', display: 'block' }}
          ref={loadingRef}
        >
          loading...
        </span>
      )}
    </>
  );
};

export default MyDiary;
