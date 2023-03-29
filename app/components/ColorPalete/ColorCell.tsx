import { SIZE } from "@theme/styles";
import { IColor } from "@types";
import React, { Component } from "react";

const ColorCell = ({ color }: IColor) => {
  return (
    <>
      <div
        className="color-cell"
        style={{
          background: `#${color}`,
          width: SIZE.COLOR_CELL.WIDTH,
          height: SIZE.COLOR_CELL.HEIGHT,
        }}
      ></div>
    </>
  );
};

export default ColorCell;
