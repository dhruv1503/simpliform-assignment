export type MainLayoutProps = {
    children: React.ReactNode;
    maxHeight?: string
    overflowY? : string
  };

export type TInput = {
   name : string,
   type : string,
   placeholder : string,
   defaultValue? : number | string,
   value : number | string,
   onChange : () => void,
   onFocus : () => void,
   onTouch : () => void
}

export type TSliderInput = Omit<TInput, "onChange" | "value"> & {
    onChange  : (value : number) => void,
    maxValue : number,
    minValue : number,
    step : number
    value : number
}