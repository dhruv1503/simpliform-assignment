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
  default? : number | string,
  description : string,
  required : boolean
}

export type TInputList = TInputList[]



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
  },
  "Sampling Rate" : {
    min : 8000,
    max : 44000,
    steps: 1
  },
  



};


export type TSpecificationInput = TInput & { range: TRange };

export type TSpecificationInputList = TSpecificationInput[];

export type TOutput = {
  output : string,
  description: string,
  type : string
  
}

export type TOutputList = TOutput[]

export type TOutputPrediction = {
  [key in string] : string
}

export type TOutputPredictionList = TOutputPrediction[]

export type TInputsCollection = {
  inputs : TInputList | [],
  specificationInputs : TSpecificationInputList | []
}

export type AllInputs = Array<TInput | TSpecificationInput>

export type TModelSpace = TModel & {
outputs : TOutputList,
inputs : AllInputs ,
specificationInputs : TSpecificationInput
}