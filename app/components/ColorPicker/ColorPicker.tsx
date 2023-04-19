import { IColor } from "@types";
import { useState } from "react";
import { SketchPicker } from "react-color";

interface IColorPickerProps {
  selectedColor: IColor;
  setColorHandler: (newColor: string) => void;
}

const ColorPicker = ({
  selectedColor = { color: "000000" },
  setColorHandler,
}: IColorPickerProps) => {
  const [sketchPickerColor, setSketchPickerColor] = useState(
    selectedColor.color
  );
  return (
    <>
      <SketchPicker
        color={sketchPickerColor}
        onChange={(color) => {
          setSketchPickerColor(color.hex.slice(1));
          setColorHandler(color.hex.slice(1));
        }}
      />
    </>
  );
};

export default ColorPicker;
