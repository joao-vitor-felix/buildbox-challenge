import { ComponentProps } from "react";
import { ExecutionProps } from "styled-components";

import * as S from "@/components/Input/Input.styles";
import { InputType } from "@/constants/INPUT_TYPE_CLASSES";

type InputProps = ComponentProps<"input"> & {
  inputType?: InputType;
  as?: ExecutionProps["as"];
};

export const Input = ({ inputType = "DEFAULT", ...props }: InputProps) => {
  const getInputType = (type: InputType): typeof S.Input => {
    switch (type) {
      case "DEFAULT":
        return S.Input;
      case "TEXTAREA":
        return S.InputTextArea;
      default:
        // eslint-disable-next-line no-case-declarations
        const _exhaustiveCheck: never = type;
        return _exhaustiveCheck;
    }
  };
  const CustomInput = getInputType(inputType);

  return <CustomInput {...props} />;
};
