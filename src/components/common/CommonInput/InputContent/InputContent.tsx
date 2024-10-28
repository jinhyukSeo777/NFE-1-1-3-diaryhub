import * as styles from './InputContent.css';

interface IProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const InputContent = ({ content, setContent }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className={styles.container}>
      <span className={styles.span}>그날의 일기</span>
      <textarea
        value={content}
        className={styles.textarea}
        placeholder="일기 내용을 입력해주세요"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InputContent;
