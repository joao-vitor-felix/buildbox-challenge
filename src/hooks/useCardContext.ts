import { useContext } from "react";

import { CardContext } from "@/contexts/CardContext";

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }

  return context;
};
