import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuth(true);
      return;
    }

    setAuth(false);
  }, []);

  return auth;
};
