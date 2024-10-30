import { useEffect, useState } from 'react';
import Article from './Article';
import Card from './CommonCard/Card';
import { articleArea, btn, ul, cardContainer } from '../styles/Article.css';
import { Diary } from '../pages/Home';
import btnImg from '../assets/btn.svg';
import { useNavigate } from 'react-router-dom';
interface ArticleAreaProps {
  diaries: Diary[];
}

const ArticleArea = ({ diaries }: ArticleAreaProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOnclick = () => {
    navigate('/createDiary');
  };

  return (
    <section className={articleArea}>
      <button className={btn} onClick={handleOnclick}>
        <img
          src={btnImg}
          alt="btnImg"
          style={{ width: '50px', height: 'auto' }}
        />
      </button>
      <ul className={ul}>
        {windowWidth >= 950 ? (
          diaries
            .slice(0, 5)
            .map((diary) => <Article key={diary._id} diary={diary} />)
        ) : (
          <div className={cardContainer}>
            {diaries.slice(0, 5).map((diary) => (
              <Card key={diary._id} diary={diary} />
            ))}
          </div>
        )}
      </ul>
    </section>
  );
};

export default ArticleArea;
