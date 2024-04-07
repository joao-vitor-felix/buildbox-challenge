import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.layout.header};
  width: 100%;
  height: 9rem;
  padding: 2.4rem 0;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 12rem;
`;
