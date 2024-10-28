import Count from './Count';
import {
  article,
  innerDiv,
  title,
  titleText,
  icons,
  text,
  countPosition,
} from '../styles/Article.css';
import { Diary } from '../pages/Home';

const Article = ({ diary }: { diary: Diary }) => {
  return (
    <li className={article}>
      <img
        src={diary.images[0]}
        alt="Sample"
        style={{ width: '80px', height: 'auto', borderRadius: '10px' }}
      />
      <div className={innerDiv}>
        <div className={title}>
          <h3 className={titleText}>{diary.title}</h3>
          <div className={icons}>
            <img
              src={diary.weather}
              alt="weather"
              style={{ width: '24px', height: 'auto' }}
            />
            <img
              src={diary.mood}
              alt="emotion"
              style={{ width: '24px', height: 'auto' }}
            />
          </div>
        </div>
        <div>
          <p className={text}>{diary.content}</p>
          <p className={text}>{diary.diaryDate.toLocaleDateString()}</p>
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
