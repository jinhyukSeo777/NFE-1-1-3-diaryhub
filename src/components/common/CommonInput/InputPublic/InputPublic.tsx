import { b1 } from '@constants/color';
import * as styles from './InputPublic.css';

interface IProps {
  isPublic: boolean;
  setIsPublic: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputPublic = ({ isPublic, setIsPublic }: IProps) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        onClick={() => setIsPublic(true)}
        style={{
          backgroundColor: isPublic ? `${b1}` : undefined,
          color: isPublic ? 'white' : undefined,
        }}
      >
        공개
      </button>
      <button
        className={styles.btn}
        onClick={() => setIsPublic(false)}
        style={{
          backgroundColor: !isPublic ? `${b1}` : undefined,
          color: !isPublic ? 'white' : undefined,
        }}
      >
        비공개
      </button>
    </div>
  );
};

export default InputPublic;
