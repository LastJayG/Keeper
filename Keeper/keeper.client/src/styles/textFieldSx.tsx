import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { theme } from "../theme";

export const textFieldSx: SxProps<Theme> = {
  color: theme.palette.primary.dark,
  fontSize: '12px',
  fontFamily: "'Georgia', serif",
};