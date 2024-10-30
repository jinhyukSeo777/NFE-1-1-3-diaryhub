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
import { useAuth } from '../components/AuthContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // AuthContext에서 login 함수 가져오기
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
        console.log('로그인 성공:', data);

        // 로그인 성공 시 AuthContext의 login 호출
        login(data.token); // 받은 토큰을 login 함수에 전달

        // 예시: 홈 페이지로 리디렉션
        navigate('/');
      } else {
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
        />

        <Button variant="login" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
