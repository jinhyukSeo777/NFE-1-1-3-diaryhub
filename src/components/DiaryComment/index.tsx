import writeComment from '../../utils/writeComment';
import deleteComment from '../../utils/deleteComment';
import * as S from './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import note from '../../assets/note.svg';
import { Comment } from '../../types/diaryTypes';
import { getComment } from '../../utils/diaryApi';

interface DiaryCommentProps {
  commentsList: Comment[];
  setDiaryComments: React.Dispatch<
    React.SetStateAction<Comment[] | undefined | null>
  >;
  diaryId: string;
}

const DiaryComment = ({
  commentsList,
  setDiaryComments,
  diaryId,
}: DiaryCommentProps) => {
  const token = localStorage.getItem('authToken');
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (token) {
      const formData = new FormData(e.currentTarget);
      const inputValue: string | null = formData.get('comment') + '';
      saveComment(inputValue);
    } else {
      alert('댓글을 작성하려면 로그인해야 합니다!');
    }
    e.currentTarget.reset();
  };
  const saveComment = async (comment: string | null) => {
    if (comment !== null && comment.length > 0) {
      await writeComment(diaryId, comment);
      const commentInfo = await getComment(diaryId);
      setDiaryComments(commentInfo);
    } else {
      alert('댓글을 입력해주세요!');
    }
  };
  const delComment = async (commentId: string) => {
    await deleteComment(diaryId, commentId);
    const commentInfo = await getComment(diaryId);
    setDiaryComments(commentInfo);
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
        {commentsList.length > 0 ? (
          commentsList.map((comment, index) => {
            return (
              <li className={S.commentItem} key={index}>
                <span className={S.commentUser}>{comment.user.username} </span>
                <span className={S.commentDate}>
                  {comment.createdAt.split('T')[0]}
                </span>
                {comment.user._id ===
                (token && JSON.parse(atob(token.split('.')[1])).userId) ? (
                  <span
                    className={S.commentDeleteButton}
                    onClick={() => {
                      delComment(comment._id);
                    }}
                  >
                    삭제하기
                  </span>
                ) : (
                  <></>
                )}
                <p className={S.commentBody}>
                  <FontAwesomeIcon
                    style={{
                      marginRight: '0.7rem',
                      opacity: '0.5',
                      position: 'relative',
                      top: '3px',
                      fontSize: '0.95rem',
                    }}
                    icon={faComments}
                  />
                  {comment.content}
                </p>
              </li>
            );
          })
        ) : (
          <div className={S.emptyCommentBox}>
            <p>아직 댓글이 없어요.</p>
            <p>첫 번째 댓글을 달아보세요!</p>
            <img src={note} alt="note"></img>
          </div>
        )}
      </ul>
    </div>
  );
};
export default DiaryComment;
