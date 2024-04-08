import { useCardContext } from "@/hooks/useCardContext";

import { Card } from "../Card/Card";
import * as S from "./CardList.styles";

const CardList = () => {
  const { cards } = useCardContext();

  const isCardList = cards.length > 0;

  return (
    <S.Container>
      {isCardList && <S.Header>Feed</S.Header>}
      <S.Wrapper>
        {cards.map(card => (
          <Card card={card} key={card.id} isNew={card.id === cards[0].id} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default CardList;
