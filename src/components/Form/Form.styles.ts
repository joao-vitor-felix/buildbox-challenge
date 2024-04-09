import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.form.background};
  width: 100%;
  margin-top: 4rem;
  padding: 2.4rem;
  border: solid 1px ${({ theme }) => theme.colors.form.border};
  border-radius: 0.3rem;

  @media screen and (min-width: 768px) {
    width: 50.16rem;
    align-self: center;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const Error = styled.span`
  color: red;
  font-size: 1.1rem;
`;

export const ResetFormButton = styled.button`
  width: 6rem;
  height: 1.7rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.layout.disabled};
  background-color: transparent;
  border: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  gap: 2.4rem;
`;
