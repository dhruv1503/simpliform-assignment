import { apiInstance, CustomResponse } from ".";

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
    const {data, timeConsumed} : CustomResponse  = await apiInstance.get(`/model-spaces/${id}`);
    console.log({data : data.data, timeConsumed})
    return {data, timeConsumed};
  } catch (error) {
    return error;
  }
};
