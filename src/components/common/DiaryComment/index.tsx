import { DiaryCommentResponseType } from '../../../pages/DiaryDetail';
import * as S from './styles.css';

interface DiaryCommentProps {
  commentsList: DiaryCommentResponseType[];
}

const DiaryComment = ({ commentsList }: DiaryCommentProps) => {
  return (
    <div className={S.commentWrapper}>
      <div className={S.writeComment}>
        <p>댓글</p>
        <form className={S.commentForm}>
          <input
            placeholder="댓글을 입력해주세요"
            className={S.commentInput}
          ></input>
          <button>작성</button>
        </form>
      </div>
      <ul className={S.commentList}>
        {commentsList.map((comment, index) => {
          return (
            <li className={S.commentItem}>
              <span>{comment.user.username} </span>
              <span>{comment.createdAt.split('T')[0]}</span>
              <p>{comment.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default DiaryComment;
