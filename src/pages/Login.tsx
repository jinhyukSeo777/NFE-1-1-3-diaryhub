import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  pageContainer,
  welcomeSection,
  formSection,
  imgSection,
} from './Login.css';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // 로그인 성공 시 처리 (예: 토큰 저장)
        console.log('로그인 성공:', data);

        // 예시: 홈 페이지로 리디렉션
        navigate('/');
      } else {
        // 로그인 실패 시 처리
        console.error('로그인 실패');
        alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={pageContainer}>
      {/* 왼쪽 섹션 */}
      <div className={welcomeSection}>
        <h1>로그인하기</h1>
        <p>교환일기에 오신 걸 환영해요</p>
        <div className={imgSection}>
          <p>
            계정이 없으신가요? <br />
            <Link to="/signup">여기</Link>를 눌러 회원가입 해주세요!
          </p>
          <img src="/assets/logo.svg" alt="logo" />
        </div>
      </div>

      {/* 로그인 폼 섹션 */}
      <div className={formSection}>
        <h2>로그인</h2>
        <Input
          type="text"
          placeholder="user name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<i className="fas fa-eye"></i>} // 비밀번호 표시 아이콘
        />

        <Button
          variant="login" // login 스타일로 적용
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
