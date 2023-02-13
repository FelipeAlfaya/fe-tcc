import axios, { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import CardGroup from '../components/CardGroup';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import { ServerResponse } from '../interfaces/server-response';
import { Team } from '../interfaces/team';
import { User } from '../interfaces/user';
import * as S from '../styles/pages/index-styles';

type Card = {
  title: string;
  icon?: string;
  href: string;
};

const Home = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      title: 'Apps',
      icon: 'dashboard',
      href: '/apps',
    },
    {
      title: 'Minha conta',
      icon: 'person',
      href: '/account',
    },
  ]);
  const [user, setUser] = useState<User>({} as User);
  const [team, setTeam] = useState<Team>({} as Team);
  const [loadingTeam, setLoadingTeam] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);
  const [loadingCards, setLoadingCards] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const fetchTeam = useCallback(async () => {
    return axios
      .get(`http://localhost:3000/team`, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then(async (res: AxiosResponse<ServerResponse<Team>>) => {
        return res.data.data;
      })
      .catch(() => {});
  }, []);

  const fetchUser = useCallback(async () => {
    return axios
      .get<ServerResponse<User>>('http://localhost:3000/user', {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then(async (res: AxiosResponse<ServerResponse<User>>) => {
        return res.data.data;
      })
      .catch(() => {});
  }, []);

  const handleLoad = useCallback(async () => {
    setLoadingUser(true);
    await fetchUser()
      .then(async _user => {
        if (_user) {
          setUser(_user);
          setLoadingTeam(true);
          await fetchTeam()
            .then(_team => {
              if (_team) {
                setTeam(_team);
                if (_team.master.id === _user.id) {
                  setIsAdmin(true);
                  localStorage.setItem('isAdmin', 'true');
                }
              }
            })
            .finally(() => {
              setLoadingTeam(false);
            });
        }
      })
      .finally(() => {
        setLoadingUser(false);
      });
  }, [fetchUser, fetchTeam]);

  const updateCards = (_cards: Card[]) => {
    setCards(newCards => [...newCards, ..._cards]);
  };

  useEffect(() => {
    setLoadingCards(true);
    handleLoad()
      .then(() => {
        if (isAdmin) {
          updateCards([
            {
              title: 'advogados',
              icon: 'group',
              href: '/members',
            },
            {
              title: 'gerenciar time',
              icon: 'settings',
              href: '/team',
            },
          ]);
        }
      })
      .finally(() => {
        setLoadingCards(false);
      });
  }, [handleLoad, isAdmin]);

  return (
    <S.Container>
      <>
        {(loadingUser && (
          <S.LoaderContainer>
            <Loader size={48} color="#00f0f1" />
          </S.LoaderContainer>
        )) || (
          <S.HomeTitle>
            Olá, <S.HomeTitleBold>{user?.name?.split(' ')[0]}</S.HomeTitleBold>.
            Seja bem-vindo ao time{' '}
            <S.HomeTitleBold>{team?.name?.split(' ')[0]}</S.HomeTitleBold>!
          </S.HomeTitle>
        )}
        {(loadingCards && (
          <S.LoaderContainer>
            <Loader size={80} color="#00f0ff" />
          </S.LoaderContainer>
        )) || <CardGroup cards={cards} />}
      </>
    </S.Container>
  );
};

Home.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
