import stamp from '@assets/icons/stamp.svg';
import chat from '@assets/icons/chat.svg';
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
      <img
        src={chat}
        alt="chat"
        style={{ width: '18px', height: 'auto', marginLeft: '0.3rem' }}
      />
      {comments.length}
    </div>
  );
};

export default Likes;
