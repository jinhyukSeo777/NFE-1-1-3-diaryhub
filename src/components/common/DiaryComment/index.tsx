import { DiaryCommentResponseType } from '../../../pages/DiaryDetail';
import deleteComment from '../../../utils/deleteComment';
import writeComment from '../../../utils/writeComment';
import * as S from './styles.css';

interface DiaryCommentProps {
  commentsList: DiaryCommentResponseType[];
  diaryId: string;
}

const DiaryComment = ({ commentsList, diaryId }: DiaryCommentProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (token) {
      const formData = new FormData(e.currentTarget);
      const inputValue = formData.get('comment');
      saveComment(inputValue);
    } else {
      alert('댓글을 작성하려면 로그인해야 합니다!');
    }
    e.currentTarget.reset();
  };
  const saveComment = (comment: FormDataEntryValue | null) => {
    if (comment != null) {
      writeComment(diaryId, comment);
    }
  };
  const delComment = (commentId: string) => {
    window.location.reload();
    deleteComment(diaryId, commentId);
  };
  return (
    <div className={S.commentContainer}>
      <div className={S.writeCommentBox}>
        <p className={S.writeCommentTitle}>댓글</p>
        <form className={S.writeCommentForm} onSubmit={(e) => onSubmit(e)}>
          <input
            placeholder="댓글을 입력해주세요"
            className={S.writeCommentInput}
            name="comment"
          ></input>
          <button className={S.writeCommentButton}>작성</button>
        </form>
      </div>
      <ul className={S.commentList}>
        {commentsList &&
          commentsList.map((comment, index) => {
            return (
              <li className={S.commentItem} key={index}>
                <span className={S.commentUser}>{comment.user.username} </span>
                <span className={S.commentDate}>
                  {comment.createdAt.split('T')[0]}
                </span>
                <span
                  className={S.commentDeleteButton}
                  onClick={() => {
                    delComment(comment._id);
                  }}
                >
                  삭제하기
                </span>
                <p className={S.commentBody}>{comment.content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default DiaryComment;
