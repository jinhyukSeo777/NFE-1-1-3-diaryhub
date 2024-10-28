import CardContent from './CardContent';
import CardHead from './CardHead';
import { Diary } from '../../pages/Home';
import Count from '../Count';
import { card, margin } from '../../styles/Card.css';

const Card = ({ diary }: { diary: Diary }) => {
  return (
    <li className={card}>
      <CardHead
        username={diary.user.username}
        state={diary.location.state}
        diaryDate={diary.diaryDate}
        mood={diary.mood}
        weather={diary.weather}
      />
      <img
        src={diary.images[0]}
        alt="Sample"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className={margin}>
        <Count likes={diary.likes} comments={diary.comments} />
      </div>
      <CardContent title={diary.title} content={diary.content} />
    </li>
  );
};

export default Card;
