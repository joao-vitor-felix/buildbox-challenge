import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CardContextProvider } from "@/contexts/CardContext";
import { Theme } from "@/styles/Theme";

import { Form } from "./Form";

const renderComponent = async () => {
  render(
    <Theme>
      <CardContextProvider>
        <Form />
      </CardContextProvider>
    </Theme>
  );

  const photoInput = screen.getByLabelText(/Selecione uma imagem/i);
  const imageIcon = screen.getByRole("img", { name: /ícone de imagem/i });

  const image = screen.queryByRole("img", { name: /imagem selecionada/i });
  const trashIcon = screen.queryByRole("img", { name: /ícone de lixeira/i });

  const nameInput = screen.getByPlaceholderText(/digite seu nome/i);
  const messageInput = screen.getByPlaceholderText(/mensagem/i);
  const resetButton = screen.getByRole("button", { name: /descartar/i });
  const submitButton = screen.getByRole("button", { name: /publicar/i });

  return {
    photoInput,
    imageIcon,
    image,
    trashIcon,
    nameInput,
    messageInput,
    resetButton,
    submitButton
  };
};

describe("Form", () => {
  it("should render the Form", async () => {
    const {
      photoInput,
      nameInput,
      imageIcon,
      image,
      trashIcon,
      messageInput,
      resetButton,
      submitButton
    } = await renderComponent();

    expect(photoInput).toBeInTheDocument();
    expect(imageIcon).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(image).not.toBeInTheDocument();
    expect(trashIcon).not.toBeInTheDocument();
  });

  it("should disabled submitButton when the inputs are empty", async () => {
    const { nameInput, messageInput, submitButton, imageIcon } =
      await renderComponent();

    expect(imageIcon).toBeInTheDocument();
    expect(nameInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
    expect(submitButton).toBeDisabled();
  });

  it("should enable submitButton when any input is filled", async () => {
    const { nameInput, submitButton } = await renderComponent();

    expect(submitButton).toBeDisabled();
    await userEvent.type(nameInput, "John Doe");
    expect(submitButton).toBeEnabled();
  });

  it("should clear the form when resetButton is clicked", async () => {
    const { photoInput, nameInput, messageInput, resetButton } =
      await renderComponent();

    const file = new File(["(⌐□_□)"], "bla.png", { type: "image/png" });

    await userEvent.upload(photoInput, file);
    await screen.findByAltText(/imagem selecionada/i);
    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(messageInput, "John Doe");
    await userEvent.click(resetButton);

    const imageIconAfterReset = screen.getByRole("img", {
      name: /ícone de imagem/i
    });
    expect(imageIconAfterReset).toBeInTheDocument();
    expect(nameInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });

  it("should remove the image when trashIcon is clicked", async () => {
    const { photoInput } = await renderComponent();

    const file = new File(["(⌐□_□)"], "bla.png", { type: "image/png" });

    await userEvent.upload(photoInput, file);
    const imageUploaded = await screen.findByAltText(/imagem selecionada/i);
    const trashIcon = screen.getByRole("img", { name: /ícone de lixeira/i });

    await userEvent.click(trashIcon);

    const imageIconAfterRemove = screen.getByRole("img", {
      name: /ícone de imagem/i
    });
    expect(imageIconAfterRemove).toBeInTheDocument();
    expect(imageUploaded).not.toBeInTheDocument();
    expect(trashIcon).not.toBeInTheDocument();
  });
});
