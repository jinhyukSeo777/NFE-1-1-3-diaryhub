import Count from '../Count/Count';
import {
  article,
  innerDiv,
  title,
  titleText,
  icons,
  text,
  countPosition,
} from './Article.css';
import { Diary } from '../../pages/Home/Home';
import { useNavigate } from 'react-router-dom';
import { DiaryDate } from '../../utils/date';

const Article = ({ diary }: { diary: Diary }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/diarydetail/${diary._id}`);
  };

  return (
    <li className={article} onClick={handleClick}>
      <img
        src={diary.images[0]}
        alt="Sample"
        style={{
          width: 90,
          height: 90,
          borderRadius: '10px',
          objectFit: 'cover',
        }}
      />
      <div className={innerDiv}>
        <div className={title}>
          <h3 className={titleText}>{diary.title}</h3>
          <div className={icons}>
            {/* <img
              src={require(`../assets/${diary.weather}.svg`)}
              alt="weather"
              style={{ width: '24px', height: 'auto' }}
            />
            <img
              src={require(`../assets/${diary.mood}.svg`)}
              alt="emotion"
              style={{ width: '24px', height: 'auto' }}
            /> */}
          </div>
        </div>
        <div>
          <p className={text}>{diary.content}</p>
          <p className={text}>{DiaryDate(diary.diaryDate)}</p>
          <p className={text}>{diary.location.state}</p>
          <div className={countPosition}>
            <Count likes={diary.likes} comments={diary.comments} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Article;
