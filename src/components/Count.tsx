import stamp from '../assets/stamp.svg';
import chat from '../assets/chat.svg';
import { container } from '../styles/Count.css';

const Likes = () => {
  return (
    <div className={container}>
      <img src={stamp} alt="stamp" style={{ width: '24px', height: 'auto' }} />
      16
      <img src={chat} alt="chat" />
      16
    </div>
  );
};

export default Likes;
