import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Button from '../../components/Button';
import CardGroup from '../../components/CardGroup';
import Layout from '../../components/Layout';
import * as S from '../../styles/pages/apps-styles';

type Card = {
  title: string;
  icon?: string;
  href: string;
};

const MyApps = () => {
  const router = useRouter();

  const cards: Card[] = useMemo(
    () => [
      {
        title: 'Projudi',
        icon: 'dashboard',
        href: '/apps/projudi',
      },
    ],
    []
  );

  return (
    <S.Container>
      <Button color="#15151C" onClick={router.back}>
        Voltar
      </Button>
      <S.HomeTitle>
        Meus <S.HomeTitleBold>Aplicativos</S.HomeTitleBold>
      </S.HomeTitle>
      <CardGroup cards={cards} />
    </S.Container>
  );
};

MyApps.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default MyApps;
