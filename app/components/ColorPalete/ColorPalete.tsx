"use client";
import * as React from "react";
import { Component } from "react";
import { Stack } from "@mui/material";
import ColorCell from "./ColorCell";
import { IColorPaleteBucket } from "../../types";
import { COLORS } from "@constants";

const ColorPalete = () => {
  return (
    <>
      {COLORS.mockColorsPalletes.map((colorPallete: IColorPaleteBucket) => {
        return (
          <>
            <div
              className="color-palete"
              style={{ padding: "20px", overflow: "auto" }}
            >
              <Stack spacing={0}>
                <ColorCell color={colorPallete.colorBucket[0].color} />
                <ColorCell color={colorPallete.colorBucket[1].color} />
                <ColorCell color={colorPallete.colorBucket[2].color} />
                <ColorCell color={colorPallete.colorBucket[3].color} />
              </Stack>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ColorPalete;
