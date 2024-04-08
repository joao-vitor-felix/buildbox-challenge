import { createContext, PropsWithChildren, useState } from "react";

import type { FormValues } from "@/components/Form/schema";

export type CardType = FormValues & { id: string };

type CardContextType = {
  cards: CardType[];
  setCards: (card: CardType[]) => void;
};

export const CardContext = createContext<CardContextType | null>(null);

export const CardContextProvider = ({ children }: PropsWithChildren) => {
  const [cards, setCards] = useState<CardType[]>([]);

  return (
    <CardContext.Provider value={{ cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};
