import { apiInstance, CustomResponse } from ".";
import { TModelSpace } from "../types/data";

export const getAllModelSpace = async () => {
  try {
    const {data, timeConsumed} : CustomResponse = await apiInstance.get("/model-spaces");
    return {data: data.data, timeConsumed};
  } catch (error) {
    return error;
  }
};

export const getModelSpacesById = async (id: string) => {
  try {
    const {data, timeConsumed} : {data :  {data : TModelSpace}, timeConsumed : number}  = await apiInstance.get(`/model-spaces/${id}`);
    console.log({data : data.data, timeConsumed})
    return {data: data.data, timeConsumed};
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createPrediction = async(id : string, body : {[k : string] : string | number | boolean} ) => {
  try{
    const {data, timeConsumed} : CustomResponse = await apiInstance.post(`/predict/${id}`, {data : body});
    return {data, timeConsumed}
  }
  catch(error){
    console.log(error)
  }
}
