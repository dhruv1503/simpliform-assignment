import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getModelSpaceByIdThunk } from "./thunks";

interface ModelSlice  {
id : string,
name : string,
description : string,
avatar : string,
isLoading : boolean

}

const initialState : ModelSlice = {
    id : "",
    name : "",
    description : "",
    isLoading : false,
    avatar : ""

}


export const modelSpaceSlice = createSlice({
    name : "modelSpace",
    initialState,
    reducers : {
        setName : (state, {payload} : PayloadAction<string>) => {
            state.name = payload
        },
        setId : (state, {payload} : PayloadAction<string>) => {
            state.id = payload
        },
        setDescription : (state, {payload} : PayloadAction<string>) => {
            state.description = payload
        },
        setIsLoading : (state, {payload} : PayloadAction<boolean>)  => {
            state.isLoading = payload
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getModelSpaceByIdThunk.pending, (state) => {
          state.isLoading = true
          state.description = ""
          state.id = ""
          state.name = ""
          state.avatar = ""
         
        })
        .addCase(getModelSpaceByIdThunk.fulfilled, (state, action) => {
            console.log(action.payload.data)
            state.description = action.payload.data.description;
            state.avatar = action.payload.data.avatar;
            state.name = action.payload.data.name;
            state.id = action.payload.data.id;
            state.isLoading = false
        })
    }
})

export const {setName, setDescription,setId} = modelSpaceSlice.actions

export default modelSpaceSlice.reducer

