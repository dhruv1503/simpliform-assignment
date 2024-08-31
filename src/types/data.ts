import { TRange } from "./types";

export type TModel = {
    id: string;
    name: string;
    description: string;
    avatar: string;
  };

export type TModelList = TModel[]

export type TInput = {
  name : string,
  type : string,
  defaultValue : number | string | null,
  description : string,
  required : boolean
}



export const rangeConstants: { [key: string]: TRange } = {
  "Max Steps": {
    min: 10,
    max: 100,
    steps : 1
  },
  "Temperature": {
    min: 0,
    max: 1,
    steps : 0.01
  },
  "Max Tokens": {
    min: 0,
    max: 4096,
    steps : 1
  },
  "Frequency Penalty" : {
    min : 0 ,
    max : 2,
    steps : 0.01
  },
  "Top P" : {
    min : 0,
    max : 1,
    steps : 0.01
  },
  "Presence Penalty" : {
    min : 0,
    max : 2,
    steps : 0.01
  }


};


export type TSpecificationInput = TInput & { range: TRange };



export type TOutput = {
  output : string,
  description: string,
  type : string
  
}

export type TOutputList = TOutput[]

export type TOutputPrediction = {
  [key in string] : string
}

export type TOutputPredisctionList = TOutputPrediction[]

export type TModelSpace = TModel & {
outputs : TOutputPredisctionList,
inputs : Array<TInput | TSpecificationInput>
}