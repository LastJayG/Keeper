import { Theme } from "@emotion/react";
import { alpha, SxProps } from "@mui/material";
import { theme } from "../../theme";

export const addFolderFormSx: SxProps<Theme> = {
    borderRadius: '0 8px 8px 8px',
    borderColor: theme.palette.background.paper,
    height: '1050px',
    width: '100%',
    minWidth: '615px',
}