import { FC } from "react";
import { TSliderInput } from "../types/props";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

export const SliderInput: FC<TSliderInput> = ({
  value,
  name,
  minValue,
  maxValue,
  step,
}) => {
  return (
    <Slider value={value} name={name} min={minValue} max={maxValue} step={step}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
