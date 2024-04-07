import styled from "styled-components";

type WrapperProps = {
  $image: string;
};

export const Wrapper = styled.label<WrapperProps>`
  width: 8.8rem;
  min-height: 8.8rem;
  border-radius: 3.6rem;
  border: ${({ $image, theme }) =>
    $image ? "none" : `solid 0.1rem ${theme.colors.form.inputFileBorder}`};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Input = styled.input``;

export const Icon = styled.img`
  position: absolute;
  width: 2.4rem;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3.6rem;
`;
