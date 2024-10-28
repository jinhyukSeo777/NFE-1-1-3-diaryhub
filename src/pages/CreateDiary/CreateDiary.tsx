import { useState } from 'react';
import * as styles from './CreateDiary.css';
import InputDate from '../../components/common/CommonInput/InputDate/InputDate';
import InputTitle from '../../components/common/CommonInput/InputTitle/InputTitle';
import InputContent from '../../components/common/CommonInput/InputContent/InputContent';
import InputWeather from '../../components/common/CommonInput/InputWeather/InputWeather';

const CreateDiary = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [title, SetTitle] = useState('');
  const [content, setContent] = useState('');
  const [weather, setWeather] = useState('');

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <InputDate date={date} setDate={setDate} />
        <InputTitle title={title} SetTitle={SetTitle} />
        <InputContent content={content} setContent={setContent} />
        <InputWeather setWeather={setWeather} />
      </div>
    </main>
  );
};

export default CreateDiary;
