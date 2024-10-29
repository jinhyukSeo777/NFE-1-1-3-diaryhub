import * as styles from './InputDate.css';

interface IProps {
  diaryDate: Date;
  setDiaryDate: React.Dispatch<React.SetStateAction<Date>>;
}

const InputDate = ({ diaryDate, setDiaryDate }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiaryDate(new Date(e.target.value));
  };

  return (
    <div className={styles.container}>
      <span className={styles.span}>날짜</span>
      <input
        value={diaryDate.toISOString().slice(0, 10)}
        className={styles.input}
        type="date"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InputDate;
