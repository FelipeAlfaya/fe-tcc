import * as S from './styles';

type IconProps = {
  children: React.ReactNode;
  size?: number;
  color?: string;
};

const Icon = (props: IconProps) => {
  return (
    <S.IconContainer color={props.color} size={props.size}>
      {props.children}
    </S.IconContainer>
  );
};

export default Icon;
