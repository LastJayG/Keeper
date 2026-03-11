import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import { chartColors, theme } from '../../../theme';

interface FolderProps {
  number: number;
  title: string;
  createdAt: string;
  languages: Record<string, number>;
  onClick?: () => void;
}

const FolderComponent: React.FC<FolderProps> = ({
  number,
  title,
  createdAt,
  languages,
  onClick,
}) => {
  const pieData = Object.entries(languages).map(([lang, percent], index) => ({
    id: index,
    value: percent,
    label: lang,
    color: chartColors[index % chartColors.length],
  }));

  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-20px',
          left: '0px',
          width: '130px',
          height: '22px',
          backgroundColor: theme.palette.background.paper,
          borderRadius: '8px 8px 0 0',
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: theme.palette.background.paper,
          borderRadius: '0 8px 8px 8px',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.3)',
          transition: 'all 0.2s ease',
          padding: 2,
          '&:hover': {
            backgroundColor: theme.palette.background.paper,
            transform: 'translateY(-3px)',
            boxShadow: '0px 8px 20px rgba(0,0,0,0.4)',
          },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pr: 2 }}>
          <Stack direction="column">
            <CardContent>
              <Typography variant="h5" color={theme.palette.text.primary}>
                {number}
              </Typography>
              <Typography variant="h4" color={theme.palette.text.primary}>
                {title}
              </Typography>
              <Typography variant="h5" color={theme.palette.text.primary}>
                {new Date(createdAt).toLocaleDateString()}
              </Typography>
            </CardContent>
          </Stack>

          <PieChart
            series={[
              {
                data: pieData.length > 0 ? pieData : [{ id: 0, value: 1, label: 'Нет данных' }],
                arcLabel: (item) => `${item.value}%`,
                arcLabelMinAngle: 20,
              },
            ]}
            width={200}
            height={200}
            skipAnimation
            sx={{
              ['& .MuiChartsLegend-label']: {
                fontSize: '30px !important',
              },
              [`& .${pieArcLabelClasses.root}`]: {
                fill: theme.palette.text.secondary,
                fontWeight: 'bold',
                fontSize: '20px',
              },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default FolderComponent;
