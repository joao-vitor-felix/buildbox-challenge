import { ComponentProps } from "react";

import * as S from "./Button.styles";

export const Button = ({ children, ...props }: ComponentProps<"button">) => {
  return <S.Button {...props}>{children}</S.Button>;
};
