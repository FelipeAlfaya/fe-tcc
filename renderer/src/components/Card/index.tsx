import Link from 'next/link';
import Icon from '../Icon';
import * as S from './styles';

type CardProps = {
  title: string;
  icon?: string;
  href: string;
};

const Card = (props: CardProps) => {
  return (
    <Link href={props.href} passHref>
      <S.CardContainer>
        <>{props.icon && <Icon size={32}>{props.icon}</Icon>}</>
        <S.CardTitle>{props.title}</S.CardTitle>
      </S.CardContainer>
    </Link>
  );
};

export default Card;
