import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  errorPageContainer,
  errorTitle,
  errorMessage,
  backButton,
} from './Error.css';

type ErrorPageProps = {
  errorCode?: number;
  message?: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode = 404, message }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className={errorPageContainer}>
      <h1 className={errorTitle}>{errorCode} Error</h1>
      <p className={errorMessage}>{message || '페이지를 찾을 수 없습니다.'}</p>
      <button onClick={handleBack} className={backButton}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default ErrorPage;
