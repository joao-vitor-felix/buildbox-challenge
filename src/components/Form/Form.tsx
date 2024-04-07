import { Input } from "../Input/Input";
import { PhotoInput } from "../PhotoInput/PhotoInput";
import * as S from "./Form.styles";

export const Form = () => {
  return (
    <S.Form>
      <PhotoInput />
      <S.InputGroup>
        <Input placeholder="Digite seu nome" />
        <Input placeholder="Mensagem" inputType="TEXTAREA" as="textarea" />
      </S.InputGroup>
    </S.Form>
  );
};
