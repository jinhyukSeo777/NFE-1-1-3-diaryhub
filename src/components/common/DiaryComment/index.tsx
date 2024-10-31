import { Dispatch, SetStateAction } from 'react';
import { DiaryCommentResponseType } from '../../../pages/DiaryDetail';
import deleteComment from '../../../utils/deleteComment';
import writeComment from '../../../utils/writeComment';
import * as S from './styles.css';

interface DiaryCommentProps {
  commentsList?: DiaryCommentResponseType[];
  diaryId?: string;
}

const DiaryComment = ({ commentsList, diaryId = '' }: DiaryCommentProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get('comment');
    saveComment(inputValue);
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
        <p>댓글</p>
        <form className={S.writeCommentForm} onSubmit={(e) => handleSubmit(e)}>
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