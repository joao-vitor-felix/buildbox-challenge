import { ChangeEvent, useState } from "react";

import Logo from "@/assets/photo-icon.svg";

import * as S from "./PhotoInput.styles";

export const PhotoInput = () => {
  const [image, setImage] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <S.Wrapper
      htmlFor="image-file"
      $image={image}
      aria-label="Selecione uma imagem"
    >
      <S.Input
        type="file"
        accept="image/*"
        id="image-file"
        onChange={e => handleImageChange(e)}
      />
      {!image && <S.Icon src={Logo} alt="Ícone de imagem" />}
      {image && <S.Photo src={image} alt="Imagem selecionada" />}
    </S.Wrapper>
  );
};
