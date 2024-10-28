import * as styles from './InputDate.css';

interface IProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const InputDate = ({ date, setDate }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div className={styles.container}>
      <span className={styles.span}>날짜</span>
      <input
        value={date}
        className={styles.input}
        type="date"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InputDate;
