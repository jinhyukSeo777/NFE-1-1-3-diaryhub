import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthFilter = (redirectPath: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const TOKEN = localStorage.getItem('authToken');
    if (!TOKEN) navigate(redirectPath);
  }, [navigate, redirectPath]);
};

export default useAuthFilter;
