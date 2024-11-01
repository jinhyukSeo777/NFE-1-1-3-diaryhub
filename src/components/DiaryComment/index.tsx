import { DiaryCommentResponseType } from '../../pages/DiaryDetail';
import getDiaryComments from '../../utils/getDiaryComments';
import writeComment from '../../utils/writeComment';
import deleteComment from '../../utils/deleteComment';
import * as S from './styles.css';

interface DiaryCommentProps {
  commentsList: DiaryCommentResponseType[];
  setDiaryComments: React.Dispatch<
    React.SetStateAction<DiaryCommentResponseType[] | undefined | null>
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
      const commentInfo = await getDiaryComments(diaryId);
      setDiaryComments(commentInfo);
    } else {
      alert('댓글을 입력해주세요!');
    }
  };
  const delComment = async (commentId: string) => {
    await deleteComment(diaryId, commentId);
    const commentInfo = await getDiaryComments(diaryId);
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
        {commentsList &&
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
                <p className={S.commentBody}>{comment.content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default DiaryComment;
