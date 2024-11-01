import * as styles from './InputTitle.css';

interface IProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const InputTitle = ({ title, setTitle }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.container}>
      <span className={styles.span}>제목</span>
      <input
        value={title}
        className={styles.input}
        type="text"
        placeholder="제목을 입력해주세요"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputTitle;
