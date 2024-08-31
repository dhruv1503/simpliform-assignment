import { configureStore } from "@reduxjs/toolkit";
import modelSpaceSlice  from "./features/modelSpace/slice";


export const store = configureStore({
   reducer : {modelSpace : modelSpaceSlice}
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]