import { render, screen } from "@testing-library/react";

import { CardContextProvider, CardType } from "@/contexts/CardContext";
import { Theme } from "@/styles/Theme";

import { Card } from "./Card";

describe("Card", () => {
  it("should render the Card with correct values", () => {
    const card: CardType = {
      id: "blabla",
      image: "https://example.com/image.jpg",
      name: "Junin",
      message: "hihi"
    };

    render(
      <Theme>
        <CardContextProvider>
          <Card card={card} isNew={true} />
        </CardContextProvider>
      </Theme>
    );

    const deleteIcon = screen.getByRole("img", { name: /remover card/i });
    const image = screen.getByRole("img", { name: /imagem do card/i });
    const message = screen.getByText(/hihi/i);
    const name = screen.getByText(/junin/i);

    expect(deleteIcon).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
