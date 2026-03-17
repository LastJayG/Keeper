import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import { chartColors, theme } from '../../../theme';
import { folderTopSx } from '../../../styles/folder/folderTopSx';
import { folderBodySx } from '../../../styles/folder/folderBodySx';
import { pieChartSx } from '../../../styles/pieChartSx';
import { typographyFolderSmallCaption } from '../../../styles/typography/typographyCaptions';

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
    <Box onClick={onClick} sx={folderTopSx}>
      <Box sx={folderBodySx}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pr: 2 }}>
          <Stack direction="column">
            <CardContent>
              <Typography variant="h5" sx={typographyFolderSmallCaption}>
                {number}
              </Typography>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="h5" sx={typographyFolderSmallCaption}>
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
            sx={pieChartSx}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default FolderComponent;
