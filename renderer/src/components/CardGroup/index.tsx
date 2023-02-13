import Card from '../Card';
import * as S from './styles';

type CardGroupProps = {
  cards: { title: string; href: string; icon?: string }[];
};

const CardGroup = (props: CardGroupProps) => {
  return (
    <S.Cards>
      <>
        {props.cards.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              icon={card.icon}
              href={card.href}
            />
          );
        })}
      </>
    </S.Cards>
  );
};

export default CardGroup;
