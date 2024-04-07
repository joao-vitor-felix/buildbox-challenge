import styled from "styled-components";

export const Button = styled.button`
  width: 9.8rem;
  height: 4.1rem;
  color: ${({ theme }) => theme.colors.form.text};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 0.8rem;

  &:disabled {
    color: ${({ theme }) => theme.colors.form.background};
    background-color: ${({ theme }) => theme.colors.layout.disabled};
  }
`;
