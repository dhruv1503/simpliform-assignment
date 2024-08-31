import axios from "axios"

export const getAllModelSpace = async() => {
    try{
     const {data} = await axios.get("/model-spaces");
     return data;
    }
    catch(error){
    return error
    }
}