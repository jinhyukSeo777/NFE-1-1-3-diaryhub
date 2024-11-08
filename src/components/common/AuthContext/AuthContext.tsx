import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // localStorage에서 로그인 상태 확인
    return Boolean(localStorage.getItem('authToken'));
  });

  const login = (token: string) => {
    localStorage.setItem('authToken', token); // 토큰을 localStorage에 저장
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken'); // 로그아웃 시 토큰 삭제
    setIsLoggedIn(false);
  };

  // 컴포넌트가 마운트될 때 로그인 상태를 다시 설정
  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
