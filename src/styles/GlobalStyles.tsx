import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  height: 100%;
}

body {
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.layout.background};

  &::-webkit-scrollbar {
   width: 1rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #ebfaf7;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 100vh;
    }
}

input[type="file"] {
  display: none;
}
#root {
  height: 100%;
}
`;
