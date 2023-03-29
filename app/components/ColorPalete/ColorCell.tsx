import { SIZE } from "@theme/styles";
import { THEME } from "@theme/theme";
import { IColor } from "@types";
import React, { Component, useState } from "react";

interface IColorCode {
  color: string;
}
const ColorCode = ({ color }: IColorCode) => {
  return (
    <>
      <div
        className="color-code"
        style={{
          padding: "5px",
          borderRadius: "5px",
          background: "#00000020",
          marginTop: "25px",
          marginLeft: "5px",
          maxWidth: "80px",
        }}
      >
        <p>{`#${color}`}</p>
      </div>
    </>
  );
};

const ColorCell = ({ color }: IColor) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <>
      <div
        className="color-cell"
        style={{
          background: `#${color}`,
          width: SIZE.COLOR_CELL.WIDTH,
          height: SIZE.COLOR_CELL.HEIGHT,
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {hover ? <ColorCode color={color} /> : <></>}
      </div>
    </>
  );
};

export default ColorCell;
