import stamp from '../../assets/stamp.svg';
import chat from '../../assets/chat.svg';
import { container } from './Count.css';

interface CountProps {
  likes: string[];
  comments: any[];
}

const Likes = ({ likes, comments }: CountProps) => {
  return (
    <div className={container}>
      <img src={stamp} alt="stamp" style={{ width: '18px', height: 'auto' }} />
      {likes.length}
      <img src={chat} alt="chat" style={{ width: '18px', height: 'auto' }} />
      {comments.length}
    </div>
  );
};

export default Likes;
