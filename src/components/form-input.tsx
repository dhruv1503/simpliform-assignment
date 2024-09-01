import { InfoIcon } from "@chakra-ui/icons";
import { Flex, FormControl, FormLabel, Input, Tooltip } from "@chakra-ui/react";
import { ChangeEventHandler, FC } from "react";
import { ImageUploader } from "./image-uploader";
import { AudioUploader } from "./audio-uploader";

type FormInput = {
  name: string;
  type: string;
  value: string | number | undefined;
  defaultValue?: string | number | undefined;
  description: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isRequired: boolean;
};

export const FormInput: FC<FormInput> = ({
  name,
  value,
  type,
  description,
  onChange,
  isRequired,
}) => {
  return (
    <FormControl isRequired={isRequired} maxW="347px">
      <Flex justifyContent="space-between">
        <FormLabel htmlFor={name}>{name}</FormLabel>
        <Tooltip label={description} paddingRight="0.5rem">
          <InfoIcon />
        </Tooltip>
      </Flex>
      {type === "image" ? (
        <ImageUploader onChange={onChange} />
      ) : type === "audio" ? (
        <AudioUploader onChange={onChange} />
      ) : (
        <Input name={name} type={type} value={value} onChange={onChange} />
      )}
    </FormControl>
  );
};
