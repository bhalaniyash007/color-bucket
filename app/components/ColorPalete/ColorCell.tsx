import { IColor } from "@types";
import React, { Component } from "react";

const ColorCell = ({ color }: IColor) => {
  return (
    <>
      <div
        className="color-cell"
        style={{ background: `#${color}`, width: 100, height: 40 }}
      ></div>
    </>
  );
};

export default ColorCell;
