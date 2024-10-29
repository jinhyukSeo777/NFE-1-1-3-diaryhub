import * as styles from './InputBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import {} from 'react-kakao-maps-sdk';
import { IPosition } from '../../../../pages/CreateDiary/CreateDiary';

interface IProps {
  setPosition: React.Dispatch<React.SetStateAction<IPosition>>;
}

interface IResult {
  id: string;
  place_name: string;
  address_name: string;
  place_url: string;
  longitude: number;
  latitude: number;
}

interface IPagination {
  hasNextPage: boolean;
  nextPage: () => void;
}

const InputBar = ({ setPosition }: IProps) => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<IResult[]>([]);
  const paginationRef = useRef<IPagination | null>(null); // pagination 객체를 저장하기 위한 useRef
  const loadingRef = useRef<HTMLSpanElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const fetchData = () => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const newResult = data.map((place) => ({
          id: place.id,
          place_name: place.place_name,
          address_name: place.address_name,
          place_url: place.place_url,
          latitude: +place.y,
          longitude: +place.x,
        }));
        setResult((prev) => [...prev, ...newResult]);
        paginationRef.current = _pagination; // pagination 객체 저장
      }
    });
  };

  const loadMoreData = () => {
    if (paginationRef.current && paginationRef.current.hasNextPage) {
      paginationRef.current.nextPage(); // 다음 페이지 데이터 요청
    }
  };

  const changePosition = (latitude: number, longitude: number) => {
    setPosition({ latitude, longitude });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult([]); // 재검색시 이전 결과값 초기화
    fetchData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    const currentLoadingRef = loadingRef.current; // loadingRef.current 값을 복사

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreData();
        }
      },
      { threshold: 1.0 }
    );

    if (currentLoadingRef) {
      observerRef.current.observe(currentLoadingRef);
    }

    return () => {
      if (currentLoadingRef && observerRef.current) {
        observerRef.current.unobserve(currentLoadingRef); // 복사한 변수 사용
      }
    };
  }, [result]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          value={keyword}
          className={styles.input}
          type="text"
          placeholder="장소를 입력해주세요"
          onChange={handleChange}
        />
        <button className={styles.searchbtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <ul
        className={styles.resultarea}
        style={{ marginTop: result.length !== 0 ? '0.5rem' : undefined }}
      >
        {result.map((value, index) => (
          <li
            className={styles.result}
            key={index}
            onClick={() => changePosition(value.latitude, value.longitude)}
          >
            <span className={styles.placename}>{value.place_name}</span>
            <span className={styles.addressname}>{value.address_name}</span>
          </li>
        ))}
        {paginationRef.current?.hasNextPage && (
          <span ref={loadingRef}>loading...</span>
        )}
      </ul>
    </div>
  );
};

export default InputBar;
