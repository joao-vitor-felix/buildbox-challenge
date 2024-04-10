import { useState } from "react";

import DeleteIcon from "@/assets/delete-icon.svg";
import type { CardType } from "@/contexts/CardContext";
import { useCardContext } from "@/hooks/useCardContext";

import * as S from "./Card.styles";

type CardProps = {
  card: CardType;
  isNew: boolean;
};

export const Card = ({
  card: { id, image, name, message },
  isNew
}: CardProps) => {
  const { cards, setCards } = useCardContext();
  const [isCardBeingDeleted, setIsCardBeingDeleted] = useState(false);

  const handleDeleteCard = () => {
    setIsCardBeingDeleted(true);
    setTimeout(() => {
      setCards(cards.filter(card => card.id !== id));
    }, 800);
  };
  return (
    <S.Container $isCardBeingDeleted={isCardBeingDeleted} $isNew={isNew}>
      <S.DeleteIcon
        src={DeleteIcon}
        onClick={handleDeleteCard}
        alt="Remover card"
      />
      <S.Photo src={image} alt="Imagem do card" />
      <S.TextWrapper>
        <S.Text>{message}</S.Text>
        <S.PostInfo>
          <S.SendBy>Enviado por</S.SendBy>
          <S.Author>{name}</S.Author>
        </S.PostInfo>
      </S.TextWrapper>
    </S.Container>
  );
};
