import { useEffect, useRef, useState } from 'react';
import * as styles from './InputImg.css';
import { ReactComponent as Svg } from '@assets/icons/addphoto.svg';

interface IProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const InputImg = ({ images, setImages }: IProps) => {
  const [previews, setPreviews] = useState<string[]>([]); // 이미지 미리보기 URL을 저장
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 이미지 파일이 변경될때마다 프리뷰 만들기
  useEffect(() => {
    const newPreviews = images.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);

    // 메모리 누수 방지: 컴포넌트가 언마운트되거나 images가 변경될 때 이전 URL을 해제
    return () => {
      newPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  // 파일 선택 시 이미지 배열에 추가
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files) as File[]; // File[] 타입으로 변환

    // 새로 추가된 이미지 파일을 상태에 저장
    setImages((prevImages) => [...prevImages, ...selectedFiles]);
  };

  // 파일 선택 창 열기
  const handleMoreImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.container}>
      <span className={styles.span}>그날의 사진</span>
      <div className={styles.imagesarea}>
        {previews.map((src, index) => (
          <div
            onClick={() => deleteImage(index)}
            className={styles.image}
            key={index}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
        <button
          type="button"
          className={styles.input}
          onClick={handleMoreImageClick}
        >
          <Svg
            style={{
              width: '2.5rem',
              height: '2.5rem',
            }}
          />
        </button>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default InputImg;
