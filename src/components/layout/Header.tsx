// Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { headerStyle, navStyle, ulStyle, liStyle } from './Header.css';

const Header: React.FC = () => {
  // 로그인 상태 관리 (예: false는 로그인 안 한 상태, true는 로그인 한 상태)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // 로그인/로그아웃 토글 함수 (실제 구현에서는 로그인 API를 사용할 것)
  const handleLoginLogout = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <header className={headerStyle}>
      <nav className={navStyle}>
        <ul className={ulStyle}>
          {/* 공통 메뉴 */}
          <li className={liStyle}>
            <Link to="/">홈</Link>
          </li>

          {/* 로그인 상태에 따라 다른 메뉴 보여주기 */}
          {isLoggedIn ? (
            <>
              <li className={liStyle}>
                <Link to="/my-diary">나의 일기</Link>
              </li>
              <li className={liStyle}>
                <button onClick={handleLoginLogout}>로그아웃</button>
              </li>
            </>
          ) : (
            <>
              <li className={liStyle}>
                <Link to="/signup">회원가입</Link>
              </li>
              <li className={liStyle}>
                <button onClick={handleLoginLogout}>로그인</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
