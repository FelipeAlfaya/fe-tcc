import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../Header';
import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      if (router.pathname !== '/login') {
        router.push('/login');
      }

      return;
    }

    if (router.pathname === '/login') {
      router.push('/');
      return;
    }
  }, [router]);

  return (
    <S.Layout>
      <S.HeaderContainer>
        {router.pathname !== '/login' && <Header />}
      </S.HeaderContainer>
      <S.Content>{children}</S.Content>
    </S.Layout>
  );
};

export default Layout;
