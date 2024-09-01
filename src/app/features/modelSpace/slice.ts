import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getModelSpaceByIdThunk } from "./thunks";
import { AllInputs, TOutputList } from "../../../types/data";

interface ModelSlice {
  id: string;
  name: string;
  description: string;
  avatar: string;
  inputs: AllInputs;
  isLoading: boolean;
  outputs: TOutputList;
}

const initialState: ModelSlice = {
  id: "",
  name: "",
  description: "",
  isLoading: false,
  avatar: "",
  inputs: [],
  outputs: [],
};

export const modelSpaceSlice = createSlice({
  name: "modelSpace",
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    setId: (state, { payload }: PayloadAction<string>) => {
      state.id = payload;
    },
    setDescription: (state, { payload }: PayloadAction<string>) => {
      state.description = payload;
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setInputs: (state, { payload }: PayloadAction<AllInputs>) => {
      state.inputs = payload;
    },
    setOutputs: (state, { payload }: PayloadAction<TOutputList>) => {
      state.outputs = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getModelSpaceByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.description = "";
        state.id = "";
        state.name = "";
        state.avatar = "";
      })
      .addCase(getModelSpaceByIdThunk.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.description = action.payload.data.description;
        state.avatar = action.payload.data.avatar;
        state.name = action.payload.data.name;
        state.id = action.payload.data.id;
        state.inputs = action.payload.data.inputs;
        state.outputs = action.payload.data.outputs;
        state.isLoading = false;
      });
  },
});

export const { setName, setDescription, setId } = modelSpaceSlice.actions;

export default modelSpaceSlice.reducer;
