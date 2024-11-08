import { Diary } from '../types/diaryTypes';
import Card from '../components/CommonCard/Card';
import { mydiary, noteCon } from './../pages/MyDiary/MyDiary.css';
import note from './../assets/note.svg';

interface DiaryContentProps {
  diaryData: Diary[];
}

const DiaryContent = ({ diaryData }: DiaryContentProps) => {
  return (
    <div>
      {diaryData.length === 0 ? (
        <div style={{ marginTop: '13rem' }} className={noteCon}>
          <img src={note} alt="note" />
          <p>작성한 일기가 없습니다.</p>
        </div>
      ) : (
        <ul className={mydiary}>
          {diaryData.map((diary) => (
            <Card key={diary._id} diary={diary} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DiaryContent;
