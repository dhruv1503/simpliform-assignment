import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

interface CustomRequestConfig extends AxiosRequestConfig {
    metadata? : {
        startTime : number
    }
}

export interface CustomResponse extends AxiosResponse {
    metadata : {
        startTime : number
    },
    timeConsumed? : number
}


export const apiInstance = axios.create({
    baseURL : "https://frontend-assignment-api.misc.simplismart.ai",
    timeout : 2000,
    headers : {
        "Content-Type" : "application/json"
    }
    
})

apiInstance.interceptors.request.use((config : InternalAxiosRequestConfig) => {
(config as CustomRequestConfig).metadata= {startTime  : new Date().getTime()}
return config
 
},
(error : AxiosError) => Promise.reject(error)
)

apiInstance.interceptors.response.use((response : AxiosResponse) => {
 const config = response.config as CustomRequestConfig
 let startTime : number = 0;
 if(config.metadata){
   startTime = config.metadata.startTime
   const nowTime = new Date().getTime();
   const timeTakenByApi = nowTime - startTime;
   (response as CustomResponse).timeConsumed = timeTakenByApi
   return response
 }
  return response
},
(error : AxiosError) => {
return error
}
)
