import React, { useState, useRef, useEffect } from 'react';
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
  hamburgerButtonStyle,
  mobileMenuStyle,
  headerArea,
} from './Header.css';
import { useAuth } from '../AuthContext'; // AuthContext에서 로그인 상태 가져오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    navigate('/'); // 홈으로 이동
  };

  const handleLogoClick = () => {
    navigate('/'); // 홈으로 이동
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={headerStyle}>
      <div className={headerArea}>
        <div
          className={logoContainerStyle}
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        >
          <img src="/assets/logo.svg" alt="logo" className={logoImageStyle} />
          <h1 className={h1Style}>교환일기</h1>
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className={navStyle}>
          <ul className={ulStyle}>
            {isLoggedIn ? (
              <>
                <li className={liStyle}>
                  <Link to="/creatediary" className={linkStyle}>
                    일기 작성
                  </Link>
                </li>
                <li className={liStyle}>
                  <Link to="/mydiary" className={linkStyle}>
                    나의 일기
                  </Link>
                </li>
                <li className={liStyle}>
                  <Link
                    to="/"
                    className={linkStyle}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
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

        {/* 모바일 햄버거 메뉴 버튼 */}
        <div className={hamburgerButtonStyle} onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/* 모바일 메뉴: 모바일 해상도에서만 렌더링 */}
        {isMobileMenuOpen && (
          <nav className={mobileMenuStyle} ref={mobileMenuRef}>
            <Link
              to="/"
              className={linkStyle}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              홈
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  to="/creatediary"
                  className={linkStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  일기 작성
                </Link>
                <Link
                  to="/mydiary"
                  className={linkStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  나의 일기
                </Link>
                <Link
                  to="/"
                  className={linkStyle}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    handleLogout();
                  }}
                >
                  로그아웃
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className={linkStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  회원가입
                </Link>
                <Link
                  to="/login"
                  className={linkStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  로그인
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
