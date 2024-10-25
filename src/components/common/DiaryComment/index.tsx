import {
  commentWrapper,
  writeComment,
  commentForm,
  commentInput,
  commentList,
  commentItem,
} from './styles.css';

const DiaryComment = () => {
  return (
    <div className={commentWrapper}>
      <div className={writeComment}>
        <p>댓글</p>
        <form className={commentForm}>
          <input
            placeholder="댓글을 입력해주세요"
            className={commentInput}
          ></input>
          <button>작성</button>
        </form>
      </div>
      <ul className={commentList}>
        <li className={commentItem}>
          <p>
            작성자 <span>작성 날짜</span>
          </p>
          <p>댓글</p>
        </li>
        <li className={commentItem}>
          <p>
            작성자 <span>작성 날짜</span>
          </p>
          <p>댓글</p>
        </li>
        <li className={commentItem}>
          <p>
            작성자 <span>작성 날짜</span>
          </p>
          <p>댓글</p>
        </li>
      </ul>
    </div>
  );
};
export default DiaryComment;
