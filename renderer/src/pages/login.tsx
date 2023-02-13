import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AuthScreen from '../components/AuthScreen';
import Layout from '../components/Layout';
import { ServerResponse } from '../interfaces/server-response';
import * as S from '../styles/pages/login-styles';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const auth = async () => {
    setLoading(true);
    await axios
      .post('http://localhost:3000/auth', { email, password })
      .then((res: AxiosResponse<ServerResponse<{ token: string }>>) => {
        if (res.data.success) {
          localStorage.setItem('token', res.data.data.token);
          router.push('/');
        }
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <S.Screen>
        <AuthScreen
          onChangeEmail={handleEmailChange}
          onChangePassword={handlePasswordChange}
          onSubscribe={auth}
          isLoading={loading}
        />
      </S.Screen>
    </>
  );
};

Login.getLayout = (page: React.ReactElement) => {
  return <Layout>{page} </Layout>;
};

export default Login;
