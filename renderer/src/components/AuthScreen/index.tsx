import Image from 'next/image';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';

type AuthScreenProps = {
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  onSubscribe: () => void;
  isLoading: boolean;
};

const AuthScreen = (props: AuthScreenProps) => {
  return (
    <S.Container>
      <S.Logo>
        <Image src="/assets/icons/logo.svg" width={150} height={80} alt="" />
      </S.Logo>
      <S.Fields>
        <Input onChange={props.onChangeEmail} placeholder="Email" />
        <Input
          onChange={props.onChangePassword}
          placeholder="Senha"
          type="password"
        />
        <Button
          isLoading={props.isLoading}
          onClick={props.onSubscribe}
          icon="login"
          fullWidth
        >
          Entrar
        </Button>
      </S.Fields>
    </S.Container>
  );
};

export default AuthScreen;
