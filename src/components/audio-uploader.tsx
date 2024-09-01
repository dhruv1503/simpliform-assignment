import { ChangeEvent, FC } from "react"

type TAudioUploader = {
    onChange : (e : ChangeEvent<HTMLInputElement>) => void
}

export const AudioUploader : FC<TAudioUploader> = ({onChange}) => {

    return <input type="file" onChange = {onChange}/>
} 