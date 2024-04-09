import styled, { css, keyframes } from "styled-components";

type ContainerProps = {
  $isCardBeingDeleted: boolean;
  $isNew: boolean;
};

const fadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }`;

//FIXME: Consertar animações
export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  /* opacity: ${({ $isNew }) => ($isNew ? 0 : 1)}; */
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.card.border};
  padding: 5.6rem 2.4rem 2.4rem 3.2rem;
  position: relative;
  gap: 3.2rem;
  overflow: hidden;
  transition: all 0.4s ease;

  ${({ $isCardBeingDeleted }) =>
    $isCardBeingDeleted &&
    css`
      opacity: 0;
      /* animation: ${fadeOut} 0.5s ease-in; */
    `}

  @media screen and (min-width: 768px) {
    width: 50.16rem;
    min-height: 20.25rem;
    align-self: center;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.card.content};
  font-size: 1.2rem;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-break: break-word;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  align-self: baseline;
  overflow: hidden;
  hyphens: auto;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`;

export const SendBy = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.layout.disabled};
`;

export const Author = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.card.authorName};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3.6rem;
  width: 8.8rem;
  min-height: 8.8rem;
  max-height: 8.8rem;
  border-radius: 3.6rem;
  align-self: flex-start;
`;

export const DeleteIcon = styled.img`
  width: 2rem;
  position: absolute;
  top: 1.2rem;
  right: 0.9rem;

  @media screen and (min-width: 768px) {
    cursor: pointer;
  }
`;
