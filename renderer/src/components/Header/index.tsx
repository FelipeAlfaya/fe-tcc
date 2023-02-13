import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Button';
import * as S from './styles';

const Header = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.clear();

    router.push('/login');
  };

  return (
    <S.HeaderContainer>
      <S.Logo>
        <Link href={'/'} passHref>
          <Image
            src="/assets/icons/logo-white.svg"
            alt="Logo"
            width={150}
            height={100}
          />
        </Link>
      </S.Logo>
      <S.NavigationOptions>
        <Button onClick={logout} color="#15151C" icon="logout">
          Sair
        </Button>
      </S.NavigationOptions>
    </S.HeaderContainer>
  );
};

export default Header;
