"use client";
import { useMemo, CSSProperties, ReactNode } from "react";
import {
  styled,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";
import { HtmlTags } from "@types";

interface ITypographyProps extends TypographyProps {
  text?: string | ReactNode;
  tag?: HtmlTags;
  style?: CSSProperties;
  gutterBottom?: boolean;
  children?: ReactNode;
}

const StyledTypography = styled(MuiTypography)<TypographyProps>(
  ({ theme }) => ({
    fontFamily: [theme.font.family.PRIMARY].join(","),
  })
);

const Typography = ({
  text = "",
  style = {},
  tag = "body1",
  gutterBottom = false,
  children,
  ...restProps
}: ITypographyProps): JSX.Element => {
  const typoStyle = useMemo(() => ({ ...style }), [style]);

  return (
    <StyledTypography
      {...restProps}
      variant={tag}
      style={typoStyle}
      gutterBottom={gutterBottom}
    >
      {text || children}
    </StyledTypography>
  );
};

export default Typography;
