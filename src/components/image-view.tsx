import { ChangeEvent } from "react"

export const ImageView = ({onChange} : {onChange : (e : ChangeEvent<HTMLInputElement>) => void}) => {

    <input type="image" onChange = {onChange}/>
} 