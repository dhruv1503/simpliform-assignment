import { ChangeEvent } from "react"


export const AudioView = ({onChange} : {onChange : (e : ChangeEvent<HTMLInputElement>) => void}) => {

   return <input type="file" onChange = {onChange}/>
} 