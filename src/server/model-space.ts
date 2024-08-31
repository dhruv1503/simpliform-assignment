import axios from "axios";

export const getAllModelSpace = async () => {
  try {
    const { data } = await axios.get("/model-spaces");
    return data;
  } catch (error) {
    return error;
  }
};

export const getModelSpacesById = async (id: string) => {
  try {
    const { data } = await axios.get(`/model-spaces/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
