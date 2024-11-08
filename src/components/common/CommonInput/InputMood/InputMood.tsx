import * as styles from './InputMood.css';
import { ReactComponent as Feel1 } from '../../../../assets/icons/feel1.svg';
import { ReactComponent as Feel2 } from '../../../../assets/icons/feel2.svg';
import { ReactComponent as Feel3 } from '../../../../assets/icons/feel3.svg';
import { ReactComponent as Feel4 } from '../../../../assets/icons/feel4.svg';
import { ReactComponent as Feel5 } from '../../../../assets/icons/feel5.svg';

interface IProps {
  mood: string;
  setMood: React.Dispatch<React.SetStateAction<string>>;
}

const InputMood = ({ mood, setMood }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.span}>기분</span>
      <div className={styles.moodarea}>
        <Feel1
          style={{
            opacity: `${mood === 'feel1' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setMood('feel1')}
        ></Feel1>
        <Feel2
          style={{
            opacity: `${mood === 'feel2' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setMood('feel2')}
        ></Feel2>
        <Feel3
          style={{
            opacity: `${mood === 'feel3' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setMood('feel3')}
        ></Feel3>
        <Feel4
          style={{
            opacity: `${mood === 'feel4' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setMood('feel4')}
        ></Feel4>
        <Feel5
          style={{
            opacity: `${mood === 'feel5' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setMood('feel5')}
        ></Feel5>
      </div>
    </div>
  );
};

export default InputMood;
