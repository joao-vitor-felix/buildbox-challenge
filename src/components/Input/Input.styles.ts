import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.form.inputBackground};
  padding: 1.2rem 1.6rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.form.text};
  font-family: "Manrope", sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.colors.form.placeholderText};
  }
`;

export const InputTextArea = styled(Input)``;
