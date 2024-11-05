import CardContent from './CardContent';
import CardHead from './CardHead';
import { Diary } from '../../pages/Home/Home';
import Count from '../Count/Count';
import { card, margin } from './Card.css';
import { useNavigate } from 'react-router-dom';
import { DiaryDate } from '../../utils/date';

const Card = ({ diary }: { diary: Diary }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/diarydetail/${diary._id}`);
  };

  return (
    <li className={card} onClick={handleClick}>
      <CardHead
        username={diary.user.username}
        state={diary.location.state}
        diaryDate={DiaryDate(diary.diaryDate)}
        mood={diary.mood}
        weather={diary.weather}
      />
      <img
        src={diary.images[0].url}
        alt="Sample"
        style={{
          width: 270,
          height: 270,
          objectFit: 'cover',
        }}
      />
      <div className={margin}>
        <Count likes={diary.likes} comments={diary.comments} />
      </div>
      <CardContent title={diary.title} content={diary.content} />
    </li>
  );
};

export default Card;
