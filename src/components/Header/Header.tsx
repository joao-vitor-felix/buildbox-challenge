import Logo from "@/assets/buildbox-white.svg";

import * as S from "./Header.styles";

export const Header = () => {
  return (
    <S.Header>
      <S.Image src={Logo} alt="Logo da Buildbox" />
    </S.Header>
  );
};
