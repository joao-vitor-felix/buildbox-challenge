import { ChangeEvent } from "react";
import { UseFormRegisterReturn, UseFormReturn } from "react-hook-form";

import PhotoIcon from "@/assets/photo-icon.svg";
import TrashIcon from "@/assets/trash-icon.svg";

import { FormValues } from "../Form/Form";
import * as S from "./PhotoInput.styles";

type PhotoInputProps = {
  formProps: UseFormRegisterReturn;
  form: UseFormReturn<FormValues>;
};

export const PhotoInput = ({ form, formProps }: PhotoInputProps) => {
  const image = form.watch("image");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      form.resetField("image", {
        defaultValue: reader.result as string
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    form.resetField("image", {
      defaultValue: ""
    });
  };

  return (
    <S.Wrapper>
      <S.Label
        htmlFor="image-file"
        $image={image}
        aria-label="Selecione uma imagem"
      >
        <S.Input
          type="file"
          accept="image/*"
          id="image-file"
          {...formProps}
          onChange={e => handleImageChange(e)}
        />
        {!image && <S.PhotoIcon src={PhotoIcon} alt="Ícone de imagem" />}

        {image && <S.Photo src={image} alt="Imagem selecionada" />}
      </S.Label>
      {image && (
        <S.TrashIcon
          src={TrashIcon}
          alt="Ícone de lixeira"
          onClick={handleRemoveImage}
        />
      )}
    </S.Wrapper>
  );
};
