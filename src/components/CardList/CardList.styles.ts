import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.6rem;

  @media screen and (min-width: 768px) {
    align-self: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 1.6rem;
`;

export const Header = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.layout.feedHeader};
  margin-bottom: 0.8rem;
`;
