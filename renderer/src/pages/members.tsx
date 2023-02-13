import axios, { AxiosResponse } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import { ServerResponse } from '../interfaces/server-response';
import { User } from '../interfaces/user';
import { Team } from '../interfaces/team';
import * as S from '../styles/pages/members-styles';

const Members = () => {
  const router = useRouter();
  const [members, setMembers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [team] = useState<Team>({} as Team);

  const fetchMembers = useCallback(async () => {
    return axios
      .get(`http://localhost:3000/team/members`, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then(async (res: AxiosResponse<ServerResponse<User[]>>) => {
        return res.data.data;
      })
      .catch(() => {});
  }, []);

  const handleRemoveMember = async (id: string) => {
    await axios.delete(`http://localhost:3000/user/${id}`, {
      headers: {
        method: 'DEL',
        authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
  };

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');

    if (!isAdmin) {
      router.push('/');
    }

    setLoading(true);
    fetchMembers()
      .then(_members => {
        if (_members) {
          setMembers(_members);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetchMembers, router]);

  return (
    <S.Container>
      <>
        <Button onClick={handleBack} color="#15151C" icon="arrow_back">
          Voltar
        </Button>
        <S.MembersContainer>
          <>
            {(loading && (
              <S.LoaderContainer>
                <Loader color="#00f0f1" size={73} />
              </S.LoaderContainer>
            )) || (
              <>
                <S.HomeTitle>
                  Time{' '}
                  <S.HomeTitleBold>{team?.name?.split(' ')[0]}</S.HomeTitleBold>
                </S.HomeTitle>
                {members?.map((member, index) => {
                  return (
                    <S.Member key={index}>
                      <S.MemberIcon>
                        {(member.avatar && (
                          <Image
                            src={member.avatar}
                            width={72}
                            height={72}
                            alt={`${member.id}-logo`}
                          />
                        )) || <Icon size={70}>account_circle</Icon>}
                      </S.MemberIcon>
                      <S.MemberName>{member.name}</S.MemberName>
                      <S.MemberEmail>{member.email}</S.MemberEmail>
                      <S.RemoveButton
                        onClick={() => handleRemoveMember(member.id)}
                        color="#15151C"
                      >
                        Remover
                      </S.RemoveButton>
                    </S.Member>
                  );
                })}
              </>
            )}
          </>
        </S.MembersContainer>
      </>
    </S.Container>
  );
};

Members.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Members;
