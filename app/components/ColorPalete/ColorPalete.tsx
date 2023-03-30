"use client";
import * as React from "react";
import { Stack } from "@mui/material";
import { MOCKDATA } from "@constants";
import { COLORS } from "@styles";
import ColorCell from "@components/ColorCell";
import { IColorPaleteBucket } from "@types";

const ColorPalete = () => {
  return (
    <>
      {MOCKDATA.colorPalletes.map((colorPallete: IColorPaleteBucket) => {
        return (
          <>
            <div
              className="color-palete"
              style={{
                padding: "5px",
                overflow: "auto",
                display: "inline-block",
                background: COLORS.COLOR_BUCKET.border,
                borderRadius: "8px",
                margin: "20px",
              }}
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
