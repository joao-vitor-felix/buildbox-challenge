import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

import { THEME } from "@/constants/THEME";

export type ThemeType = typeof THEME;

export const Theme = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};
