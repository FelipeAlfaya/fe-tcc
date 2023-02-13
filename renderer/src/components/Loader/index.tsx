import * as S from './styles';

type LoaderProps = {
  size?: number;
  color?: string;
};

const Loader = (props: LoaderProps) => {
  return (
    <S.LoaderContainer
      size={props.size}
      color={props.color}
    ></S.LoaderContainer>
  );
};

export default Loader;
