import { Flex } from "@chakra-ui/react";
import { useAppSelector } from "../../../hooks";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { FormInput } from "../../../../components/form-input";

export const ModelInputSection: FC = () => {
  const { inputs } = useAppSelector((state) => state.modelSpace);
  const [form, setForm] = useState<{
    [key: string]: string | number | undefined;
  }>({});

  

  const getInitialState = () => {
    const initalState = inputs.reduce((previousValue, currentValue) => {
      previousValue[currentValue.name] = currentValue.default;
      return previousValue;
    }, {} as { [key: string]: string | number | undefined });
    setForm(initalState);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleMediaChange = (e : ChangeEvent<HTMLInputElement>) => {
    if(e.target && e.target.files){
      const file = e.target.files[0]
    
      const fileReader = new FileReader();
    fileReader.readAsDataURL(file)

    fileReader.onload = (e : ProgressEvent<FileReader>) => {
      
    
      if(e.target && e.target.result){
        const image = new Image();
        image.src = e.target?.result as string;
        console.log(image);
        const {height , width} = image
        console.log(height, width)
        image.onload = () => {
          const {height , width} = image
          console.log(height, width)
        }
      }
      
     

    }


    }
  }

  const handleFormFieldChange = (e : ChangeEvent<HTMLInputElement>, inputType : string) => {
       if(inputType === "audio" || inputType === "image"){
        handleMediaChange(e)
       }
       else{
        handleInputChange(e)
       }
  }

  useEffect(() => {
    if (inputs) {
      getInitialState();
    }
  }, [inputs]);
  return (
    <Flex
      gap="1rem"
      flexDirection="column"
      width="100%"
      maxH="100%"
      padding="1rem 1.5rem"
    >
      {inputs.length > 0 ? (
        inputs.map((input, index) => (
          <FormInput
            key={`${input.name}-${index}`}
            name={input.name}
            type={input.type}
            defaultValue={input.default}
            value={form[input.name]}
            onChange={(e) => (handleFormFieldChange(e, input.type))}
            description={input.description}
            isRequired={input.required}
          />
        ))
      ) : (
        <></>
      )}
    </Flex>
  );
};
