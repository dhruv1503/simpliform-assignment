import { Button } from "@chakra-ui/react";
import { ChangeEvent, FC, useRef } from "react"

type TImageUploader = {
    onChange : (e : ChangeEvent<HTMLInputElement>) => void
}


export const ImageUploader : FC<TImageUploader>= ({onChange}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
      if(inputRef.current){
        inputRef.current.click()
      }
    }

   return <>
   <input type="file" onChange = {onChange} ref={inputRef}/>
   <Button onClick={handleClick}>Upload Image</Button>
   </>
} 