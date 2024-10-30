import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  headerStyle,
  logoContainerStyle,
  logoImageStyle,
  navStyle,
  ulStyle,
  liStyle,
  linkStyle,
  h1Style,
} from './Header.css';
import { useAuth } from '../AuthContext'; // AuthContext에서 로그인 상태 가져오기

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // 홈으로 이동
  };

  return (
    <header className={headerStyle}>
      <div className={logoContainerStyle}>
        <img src="/assets/logo.svg" alt="logo" className={logoImageStyle} />
        <h2 className={h1Style}>교환일기</h2>
      </div>

      <nav className={navStyle}>
        <ul className={ulStyle}>
          <li className={liStyle}>
            <Link to="/" className={linkStyle}>
              홈
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className={liStyle}>
                <Link to="/my-diary" className={linkStyle}>
                  나의 일기
                </Link>
              </li>
              <li className={liStyle}>
                <Link
                  to="/"
                  className={linkStyle}
                  onClick={(e) => {
                    e.preventDefault(); // 기본 동작 방지
                    handleLogout(); // 로그아웃 함수 호출
                  }}
                >
                  로그아웃
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className={liStyle}>
                <Link to="/signup" className={linkStyle}>
                  회원가입
                </Link>
              </li>
              <li className={liStyle}>
                <Link to="/login" className={linkStyle}>
                  로그인
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
