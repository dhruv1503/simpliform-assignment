import { FC, memo } from "react";
import { TInput } from "../types/props";
import { Input } from "@chakra-ui/react";

export const CustomInput: FC<TInput> = memo(
  ({ name, type, placeholder, defaultValue, value, onChange, onFocus }) => {
    return (
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
    );
  }
);
