import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModelSlice  {
id : string,
name : string,
description : string,

}

const initialState : ModelSlice = {
    id : "",
    name : "",
    description : ""

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
        }
    }
})

export const {setName, setDescription,setId} = modelSpaceSlice.actions

export default modelSpaceSlice.reducer

