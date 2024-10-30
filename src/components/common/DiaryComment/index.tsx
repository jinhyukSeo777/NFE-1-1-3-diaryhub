import { ReactEventHandler } from 'react';
import { DiaryCommentResponseType } from '../../../pages/DiaryDetail';
import * as S from './styles.css';

interface DiaryCommentProps {
  commentsList?: DiaryCommentResponseType[];
}

const DiaryComment = ({ commentsList }: DiaryCommentProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get('comment');
    saveComment(inputValue);
    e.currentTarget.reset();
  };
  const saveComment = (comment: FormDataEntryValue | null) => {
    if (comment != null) {
      console.log(comment + '저장');
    }
  };
  const deleteComment = (comment: DiaryCommentResponseType) => {
    console.log(comment.content + '삭제');
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
                    deleteComment(comment);
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
