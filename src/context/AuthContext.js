import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // localStorage에서 JWT 토큰 확인
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (jwtToken) => {
    localStorage.setItem('token', jwtToken); // JWT 토큰을 localStorage에 저장
    setIsLoggedIn(true); // 로그인 상태로 설정
  };

  const logout = () => {
    localStorage.removeItem('token'); // JWT 토큰 제거
    setIsLoggedIn(false); // 로그아웃 상태로 설정
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
