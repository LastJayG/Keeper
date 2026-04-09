import { SxProps, Theme } from '@mui/material';
import { chartsTooltipClasses, pieArcLabelClasses } from '@mui/x-charts';
import { theme } from '../theme';

export const pieChartSx: SxProps<Theme> = {
  ['& .MuiChartsLegend-label']: {
    fontSize: '26px !important',
  },
  [`& .${pieArcLabelClasses.root}`]: {
    fill: theme.palette.text.secondary,
    fontFamily: "'Georgia', serif",
    fontWeight: 'bold',
    fontSize: '12px',
  },
  [`& .${chartsTooltipClasses.labelCell}`]: {
    fill: theme.palette.text.primary,
    color: theme.palette.text.primary,
  },
};
