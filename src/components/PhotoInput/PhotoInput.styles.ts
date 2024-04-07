import styled from "styled-components";

type WrapperProps = {
  $image: string;
};

//FIXME: Corrigir estilo da lixeira

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
`;

export const Label = styled.label<WrapperProps>`
  width: 8.8rem;
  min-height: 8.8rem;
  max-height: 8.8rem;
  border-radius: 3.6rem;
  border: ${({ $image, theme }) =>
    $image ? "none" : `solid 0.1rem ${theme.colors.form.inputFileBorder}`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Input = styled.input``;

export const PhotoIcon = styled.img`
  width: 2.4rem;
`;

export const TrashIcon = styled(PhotoIcon)``;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3.6rem;
`;
