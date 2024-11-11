import * as S from './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import note from '@assets/icons/note.svg';
import { Comment } from '@interfaces/diaryTypes';
import {
  createComment,
  getComment,
  deleteComment,
  editComment,
} from '@utils/diaryApi';
import getUserId from '@utils/getUserId';
import { useState } from 'react';

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
  const [editDiaryId, setEditDiaryId] = useState('');
  const [editDiaryContent, setEditDiaryContent] = useState('');
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const content = formData.get('content')?.toString() || '';
    if (content.trim().length < 1) {
      alert('댓글을 입력해주세요!');
    } else {
      const result = await createComment(diaryId, formData);
      if (result === null) {
        alert('댓글을 작성하려면 로그인해야 합니다!');
      }
    }
    const commentInfo = await getComment(diaryId);
    setDiaryComments(commentInfo);
    form.reset();
  };

  const onEditCommentClick = async (
    commentId: string,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const content = formData.get('content')?.toString() || '';
    if (content.trim().length < 1) {
      alert('댓글을 입력해주세요!');
    } else {
      await editComment(diaryId, commentId, formData);
      const commentInfo = await getComment(diaryId);
      setDiaryComments(commentInfo);
      setEditDiaryId('');
      form.reset();
    }
  };

  const onDeleteCommentClick = (commentId: string) => async () => {
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
            type="text"
            name="content"
            placeholder="댓글을 입력해주세요"
            className={S.writeCommentInput}
            maxLength={100}
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
                {comment.user._id === getUserId() && (
                  <>
                    <span
                      className={S.commentDeleteButton}
                      onClick={onDeleteCommentClick(comment._id)}
                    >
                      삭제하기
                    </span>
                    {editDiaryId !== comment._id && (
                      <span
                        className={S.commentDeleteButton}
                        onClick={() => {
                          setEditDiaryId(comment._id);
                          setEditDiaryContent(comment.content);
                        }}
                      >
                        수정하기
                      </span>
                    )}
                  </>
                )}
                {editDiaryId === comment._id ? (
                  <form
                    className={S.editCommentForm}
                    onSubmit={(e) => onEditCommentClick(comment._id, e)}
                  >
                    <textarea
                      name="content"
                      value={editDiaryContent}
                      className={S.editCommentTextArea}
                      onChange={(e) => {
                        setEditDiaryContent(e.target.value);
                      }}
                    ></textarea>
                    <button
                      type="button"
                      className={S.editCommentCancelButton}
                      onClick={() => {
                        setEditDiaryId('');
                      }}
                    >
                      취소
                    </button>
                    <button type="submit" className={S.editCommentButton}>
                      수정
                    </button>
                  </form>
                ) : (
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
                )}
              </li>
            );
          })
        ) : (
          <div className={S.emptyCommentBox}>
            <img src={note} alt="note"></img>
            <p>아직 댓글이 없어요.</p>
          </div>
        )}
      </ul>
    </div>
  );
};
export default DiaryComment;
