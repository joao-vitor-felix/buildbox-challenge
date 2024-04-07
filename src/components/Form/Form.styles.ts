import styled from "styled-components";

export const Form = styled.form`
  padding: 24rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.form.background};
  width: 100%;
  margin-top: 4rem;
  padding: 2.4rem;
  min-height: 30rem;
  border: solid 1px ${({ theme }) => theme.colors.form.border};
  border-radius: 0.3rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
