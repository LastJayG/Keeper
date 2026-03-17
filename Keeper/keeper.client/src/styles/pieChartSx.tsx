import { SxProps, Theme } from '@mui/material';
import { pieArcLabelClasses } from '@mui/x-charts';
import { theme } from '../theme';

export const pieChartSx: SxProps<Theme> = {
  ['& .MuiChartsLegend-label']: {
    fontSize: '30px !important',
  },
  [`& .${pieArcLabelClasses.root}`]: {
    fill: theme.palette.text.secondary,
    fontFamily: "'Georgia', serif",
    fontWeight: 'bold',
    fontSize: '20px',
  },
};
