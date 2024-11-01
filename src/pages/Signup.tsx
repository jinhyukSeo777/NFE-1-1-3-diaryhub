import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  pageContainer,
  welcomeSection,
  formSection,
  imgSection,
} from './Login/Login.css';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        alert('회원가입 성공!');
        navigate('/login'); // 회원가입 후 로그인 페이지로 이동
      } else {
        const data = await response.json();
        alert(`회원가입 실패: ${data.message || '알 수 없는 오류'}`);
      }
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={pageContainer}>
      {/* 왼쪽 섹션 */}
      <div className={welcomeSection}>
        <h1>회원가입 하기</h1>
        <p>교환일기에 오신 걸 환영해요</p>
        <div className={imgSection}>
          <p>
            계정이 있으신가요? <br />
            <Link to="/login">여기</Link>를 눌러 로그인 해주세요!
          </p>
          <img src="/assets/logo.svg" alt="logo" />
        </div>
      </div>

      {/* 회원가입 폼 섹션 */}
      <div className={formSection}>
        <h2>회원가입</h2>
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
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="login"
          onClick={handleRegister} // 회원가입 함수 연결
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
