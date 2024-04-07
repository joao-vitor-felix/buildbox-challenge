import { Input } from "../Input/Input";
import * as S from "./Form.styles";

export const Form = () => {
  return (
    <S.Form>
      <S.InputGroup>
        <Input placeholder="Digite seu nome" />
        <Input placeholder="Mensagem" inputType="TEXTAREA" as="textarea" />
      </S.InputGroup>
    </S.Form>
  );
};
