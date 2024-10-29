import { useRef, useState } from 'react';
import * as styles from './InputImg.css';
import { ReactComponent as Svg } from '../../../../assets/addphoto.svg';

interface IProps {
  images: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

const InputImg = ({ images, setImages }: IProps) => {
  const [previews, setPreviews] = useState<string[]>([]); // 이미지 미리보기 URL을 저장
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 파일 선택 시 이미지 배열에 추가하고 미리보기를 위해 URL 생성
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files) as File[]; // File[] 타입으로 변환

    // 새로 추가된 이미지 파일을 상태에 저장
    setImages((prevImages) => [...prevImages, ...selectedFiles]);

    // 미리보기를 위한 URL 생성 및 상태 저장
    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.span}>그날의 사진</span>
      <div className={styles.imagesarea}>
        {previews.map((src, index) => (
          <div
            className={styles.image}
            key={index}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        ))}
        <button
          type="button"
          className={styles.input}
          onClick={handleButtonClick}
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
