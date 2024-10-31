import * as styles from './InputWeather.css';
import { ReactComponent as Sun } from '../../../../assets/sun.svg';
import { ReactComponent as Rain } from '../../../../assets/rain.svg';
import { ReactComponent as Cloud } from '../../../../assets/cloud.svg';
import { ReactComponent as Thunder } from '../../../../assets/thunder.svg';
import { ReactComponent as Wind } from '../../../../assets/wind.svg';

interface IProps {
  weather: string;
  setWeather: React.Dispatch<React.SetStateAction<string>>;
}

const InputWeather = ({ weather, setWeather }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.span}>날씨</span>
      <div className={styles.weatherarea}>
        <Sun
          style={{
            opacity: `${weather === 'sun' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setWeather('sun')}
        ></Sun>
        <Rain
          style={{
            opacity: `${weather === 'rain' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setWeather('rain')}
        ></Rain>
        <Cloud
          style={{
            opacity: `${weather === 'cloud' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setWeather('cloud')}
        ></Cloud>
        <Thunder
          style={{
            opacity: `${weather === 'thunder' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setWeather('thunder')}
        ></Thunder>
        <Wind
          style={{
            opacity: `${weather === 'wind' ? '1' : '0.3'}`,
            cursor: 'pointer',
            width: '5rem',
            height: '5rem',
          }}
          onClick={() => setWeather('wind')}
        ></Wind>
      </div>
    </div>
  );
};

export default InputWeather;
