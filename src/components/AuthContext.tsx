// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void; // 토큰 저장을 위한 파라미터 추가
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (token: string) => {
    setIsLoggedIn(true);
    localStorage.setItem('token', token); // 토큰을 로컬 스토리지에 저장
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // 로그아웃 시 토큰 삭제
  };

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
