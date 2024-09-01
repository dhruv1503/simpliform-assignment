import { apiInstance, CustomResponse } from ".";
import {
  // AllInputs,
  // rangeConstants,
  // TInput,
  // TInputsCollection,
  TModelSpace,
  // TSpecificationInput,
} from "../types/data";

export const getAllModelSpace = async () => {
  try {
    const { data, timeConsumed }: CustomResponse = await apiInstance.get(
      "/model-spaces"
    );
    return { data: data.data, timeConsumed };
  } catch (error) {
    return error;
  }
};

export const getModelSpacesById = async (id: string) => {
  try {
    // const startTime = new Date().getTime()
    const {
      data,
      timeConsumed,
    }: { data: { data: TModelSpace }; timeConsumed: number } =
    
      await apiInstance.get(`/model-spaces/${id}`);
   
    // const inputs: AllInputs = data.data.inputs;
    // const initialState: TInputsCollection = {
    //   inputs: [],
    //   specificationInputs: [],
    // };

//     const separatedInputs: TInputsCollection = inputs.reduce(
//       (
//         previousValue: TInputsCollection,
//         currentValue: TInput | TSpecificationInput
//       ) => {
//         if (
//           Object.keys(rangeConstants).includes(currentValue.name) ||
//           Object.keys(currentValue).includes("Range")
//         ) {
//           previousValue.specificationInputs.push(
//             currentValue as TSpecificationInput
//           );
//         } else {
//           previousValue.inputs.push(currentValue as TInput);
//         }
//         return previousValue;
//       },
//       initialState
//     );

//     console.log(separatedInputs);
// const endTime = new Date().getTime()
// console.log(endTime - startTime)
    return { data: data.data, timeConsumed };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createPrediction = async (
  id: string,
  body: { [k: string]: string | number | boolean }
) => {
  try {
    const { data, timeConsumed }: CustomResponse = await apiInstance.post(
      `/predict/${id}`,
      { data: body }
    );
    return { data, timeConsumed };
  } catch (error) {
    console.log(error);
  }
};
