import { createAsyncThunk } from "@reduxjs/toolkit";
import { TModelSpace } from "../../../../types/data";
import { getModelSpacesById } from "../../../../server/model-space";

type TModelSpacebyId = {
    data : TModelSpace,
    timeConsumed : number
}

export const getModelSpaceByIdThunk = createAsyncThunk<TModelSpacebyId, string>("mode-space/byId", async(id : string) => {
   const data = await getModelSpacesById(id);
   console.log(data)
   return data
})