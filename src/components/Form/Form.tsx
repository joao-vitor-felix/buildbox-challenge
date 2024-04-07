import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { PhotoInput } from "../PhotoInput/PhotoInput";
import * as S from "./Form.styles";

const schema = z.object({
  image: z.string().url({ message: "A Imagem é obrigatória." }),
  name: z.string().trim().min(1, { message: "O nome é obrigatório." }),
  message: z.string().trim().min(1, { message: "A mensagem é obrigatório." })
});

export type FormValues = z.infer<typeof schema>;

export const Form = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      image: "",
      name: "",
      message: ""
    }
  });

  const isFormNotValid = !form.formState.isValid || !form.formState.isDirty;

  const handleResetForm = () => {
    form.reset({
      image: "",
      name: "",
      message: ""
    });
  };

  const onSubmit = () => {};

  return (
    <S.Form onSubmit={form.handleSubmit(onSubmit)}>
      <PhotoInput formProps={form.register("image")} form={form} />
      <S.Error>{form.formState.errors?.image?.message}</S.Error>
      <S.InputGroup>
        <Input
          placeholder="Digite seu nome"
          formProps={form.register("name")}
        />
        <S.Error>{form.formState.errors?.name?.message}</S.Error>
        <Input
          placeholder="Mensagem"
          inputType="TEXTAREA"
          as="textarea"
          formProps={form.register("message")}
        />
        <S.Error>{form.formState.errors?.message?.message}</S.Error>
      </S.InputGroup>
      <S.ButtonGroup>
        <S.ResetFormButton type="button" onClick={handleResetForm}>
          Descartar
        </S.ResetFormButton>
        <Button disabled={isFormNotValid}>Publicar</Button>
      </S.ButtonGroup>
    </S.Form>
  );
};
