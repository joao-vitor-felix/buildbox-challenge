import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useCardContext } from "@/hooks/useCardContext";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { PhotoInput } from "../PhotoInput/PhotoInput";
import * as S from "./Form.styles";
import { formSchema, FormValues } from "./schema";

export const Form = () => {
  const { cards, setCards } = useCardContext();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      name: "",
      message: ""
    }
  });

  const isFormNotTouched = !form.formState.isDirty;

  const handleResetForm = () => {
    form.reset({
      image: "",
      name: "",
      message: ""
    });
  };

  const onSubmit = (data: FormValues) => {
    const newCard = {
      id: crypto.randomUUID(),
      ...data
    };

    handleResetForm();

    setTimeout(() => {
      setCards([newCard, ...cards]);
    }, 1000);
  };

  return (
    <S.Form onSubmit={form.handleSubmit(onSubmit)}>
      <PhotoInput formProps={form.register("image")} form={form} />
      {form.formState.errors?.image?.message && (
        <S.Error>{form.formState.errors.image.message}</S.Error>
      )}
      <S.InputGroup>
        <Input
          placeholder="Digite seu nome"
          formProps={form.register("name")}
        />
        {form.formState.errors?.name?.message && (
          <S.Error>{form.formState.errors.name.message}</S.Error>
        )}
        <Input
          placeholder="Mensagem"
          inputType="TEXTAREA"
          as="textarea"
          formProps={form.register("message")}
        />
        {form.formState.errors?.message?.message && (
          <S.Error>{form.formState.errors.message.message}</S.Error>
        )}
      </S.InputGroup>
      <S.ButtonGroup>
        <S.ResetFormButton type="button" onClick={handleResetForm}>
          Descartar
        </S.ResetFormButton>
        <Button disabled={isFormNotTouched}>Publicar</Button>
      </S.ButtonGroup>
    </S.Form>
  );
};
