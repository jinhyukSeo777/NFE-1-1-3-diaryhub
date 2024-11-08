import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  pageContainer,
  welcomeSection,
  formSection,
  imgSection,
  welcomeSectionSpan,
  imgSectionSpan,
} from '../Login/Login.css';
import Input from '@components/common/Input/Input';
import Button from '@components/common/Button/Button';
import { b2 } from '@constants/color';
import { signupUser } from '@utils/userApi';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await signupUser(username, id, password);

      if (response.ok) {
        //alert('회원가입 성공!');
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
        <h2>회원가입 하기</h2>
        <span className={welcomeSectionSpan}>교환일기에 오신 걸 환영해요</span>
        <div className={imgSection}>
          <div>
            <span className={imgSectionSpan}>계정이 이미 있으시다면</span>
            <span className={imgSectionSpan}>
              <Link
                to="/login"
                style={{ color: `${b2}`, textDecoration: 'none' }}
              >
                여기
              </Link>
              를 눌러 로그인 해주세요!
            </span>
          </div>
          <img src="/assets/logo.svg" alt="logo" />
        </div>
      </div>

      {/* 회원가입 폼 섹션 */}
      <div className={formSection}>
        <h2>회원가입</h2>
        <Input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
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
