import { Box, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { chartColors } from '../../../theme';
import { folderTopSx } from '../../../styles/folder/folderTopSx';
import { folderBodySx } from '../../../styles/folder/folderBodySx';
import { pieChartSx } from '../../../styles/pieChartSx';
import EditIcon from '@mui/icons-material/Edit';
import { typographyFolderSmallCaption } from '../../../styles/typography/typographyCaptions';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteIconSx } from '../../../styles/icon/deleteIconSx';
import { editIconSx } from '../../../styles/icon/editIconSx';

interface FolderProps {
  number: number;
  title: string;
  createdAt: string;
  languages: Record<string, number>;
  onClick?: () => void;
  onEdit: () => void;
}

const FolderComponent: React.FC<FolderProps> = ({
  number,
  title,
  createdAt,
  languages,
  onClick,
  onEdit,
}) => {
  const sortedLanguages = Object.entries(languages).sort(([, a], [, b]) => b - a);
  
  let pieData;
  if (sortedLanguages.length > 5) {
    const top5 = sortedLanguages.slice(0, 5);
    const remaining = sortedLanguages.slice(5);
    const othersValue = remaining.reduce((sum, [, percent]) => sum + percent, 0);
    const othersCount = remaining.length;
    
    pieData = [
      ...top5.map(([lang, percent], index) => ({
        id: index,
        value: percent,
        label: lang,
        color: chartColors[index % chartColors.length],
      })),
      {
        id: 5,
        value: othersValue,
        label: `+${othersCount} more`,
        color: chartColors[5 % chartColors.length],
      },
    ];
  } else {
    pieData = sortedLanguages.map(([lang, percent], index) => ({
      id: index,
      value: percent,
      label: lang,
      color: chartColors[index % chartColors.length],
    }));
  }

  return (
    <Box onClick={onClick} sx={folderTopSx}>
      <Box sx={folderBodySx}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="column">
            <CardContent>
              <Typography variant="h5" sx={typographyFolderSmallCaption}>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit();
                  }}
                  sx={editIconSx}
                >
                  <EditIcon />
                </IconButton>
                <IconButton sx={deleteIconSx}>
                  <DeleteForeverIcon />
                </IconButton>
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
                data: pieData.length > 0 ? pieData : [{ id: 0, value: 0 }],
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