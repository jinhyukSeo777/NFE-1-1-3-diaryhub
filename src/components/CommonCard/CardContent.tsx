import { titleText, text } from '../../styles/Article.css';
interface CardContentProps {
  title: string;
  content: string;
}

const CardContent = ({ title, content }: CardContentProps) => {
  return (
    <div>
      <h3 className={titleText}>{title}</h3>
      <p className={text}>{content}</p>
    </div>
  );
};

export default CardContent;
