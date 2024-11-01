import { icons, text } from '../Article/Article.css';
import { texts } from './Card.css';

interface CardHeadProps {
  username: string;
  state: string;
  diaryDate: string;
  mood: string;
  weather: string;
}

const CardHead = ({
  username,
  state,
  diaryDate,
  mood,
  weather,
}: CardHeadProps) => {
  return (
    <div className={icons}>
      <div className={text}>
        <p className={text}>{username}</p>
        <p className={texts}>
          {state} {diaryDate}
        </p>
      </div>
      <div className={icons}>
        <img
          src={require(`../../assets/${weather}.svg`)}
          alt="weather"
          style={{ width: '24px', height: 'auto' }}
        />
        <img
          src={require(`../../assets/${mood}.svg`)}
          alt="emotion"
          style={{ width: '24px', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default CardHead;
