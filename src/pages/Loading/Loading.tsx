import * as styles from './Loading.css';
import { ReactComponent as Logo } from '@assets/logo.svg';

const Loading = () => {
  return (
    <main className={styles.container}>
      <Logo
        style={{
          width: '10rem',
          height: '10rem',
        }}
      />
      <span className={styles.loading}>Loading...</span>
    </main>
  );
};

export default Loading;
