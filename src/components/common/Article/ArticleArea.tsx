import { useEffect, useRef, useState } from 'react';
import Article from './Article';
import Card from '../CommonCard/Card';
import { articleArea, ul, cardContainer } from './Article.css';
import { noteCon } from '@pages/MyDiary/MyDiary.css';
import { Diary } from '@interfaces/diaryTypes';
import note from '@assets/icons/note.svg';
interface ArticleAreaProps {
  diaries: Diary[];
  fetchMoreData: () => void;
  hasMoreData: boolean;
}

const ArticleArea = ({
  diaries,
  fetchMoreData,
  hasMoreData,
}: ArticleAreaProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const loadingRef = useRef<HTMLSpanElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
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
  }, [diaries]);

  return (
    <section className={`${articleArea} scrolling-container`}>
      {diaries.length > 0 ? (
        <>
          <ul className={ul}>
            {windowWidth >= 950 ? (
              <>
                {diaries.map((diary) => (
                  <Article key={diary._id} diary={diary} />
                ))}
              </>
            ) : (
              <div className={cardContainer}>
                {diaries.map((diary) => (
                  <Card key={diary._id} diary={diary} />
                ))}
              </div>
            )}
          </ul>
          {hasMoreData && (
            <span
              style={{ marginBottom: '0.5rem', display: 'block' }}
              ref={loadingRef}
            >
              loading...
            </span>
          )}
        </>
      ) : (
        <div className={noteCon}>
          <img src={note} alt="note" />
          <p>작성된 일기가 없습니다.</p>
        </div>
      )}
    </section>
  );
};

export default ArticleArea;
