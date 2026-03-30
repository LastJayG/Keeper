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
import EditFolderForm from './EditFolderForm';

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
  const pieData = Object.entries(languages).map(([lang, percent], index) => ({
    id: index,
    value: percent,
    label: lang,
    color: chartColors[index % chartColors.length],
  }));

  return (
    <Box onClick={onClick} sx={folderTopSx}>
      <Box sx={folderBodySx}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pr: 3 }}>
          <Stack direction="column">
            <CardContent>
              <Typography variant="h5" sx={typographyFolderSmallCaption}>
                {number}
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
