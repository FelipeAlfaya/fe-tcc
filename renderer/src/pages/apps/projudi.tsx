import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import * as S from '../../styles/pages/apps-styles';

const MyApps = () => {
  const router = useRouter();

  return (
    <S.Container>
      <Button color="#15151C" onClick={router.back}>
        Voltar
      </Button>
      <S.AppViewer>
        <iframe
          src="https://projudi.tjba.jus.br/projudi/"
          title="Projudi"
          width="100%"
          height="100%"
        />
      </S.AppViewer>
    </S.Container>
  );
};

MyApps.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default MyApps;
