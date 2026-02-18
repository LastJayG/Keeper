import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import { theme } from "../../../theme";

interface FolderProps {
  number: number;
  title: string;
  createdAt: string;
  onClick?: () => void;
}

const FolderComponent: React.FC<FolderProps> = ({
    number,
    title,
    createdAt
}) => {
    return (
        <Box sx={{
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
                }
            }}>
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
                                <Typography variant='h5' color={theme.palette.text.primary}>
                                    {number}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography variant='h4' color={theme.palette.text.primary}>
                                    {title}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography variant='h5' color={theme.palette.text.primary}>
                                    {new Date(createdAt).toLocaleDateString()}
                                </Typography>
                            </CardContent>
                        </Stack>

                        {/* Правая часть - чарт */}
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' },
                                    ],
                                },
                            ]}
                            width={200}
                            height={200}
                        />
                    </Stack>
                </Box>
            </Box>
        /*<Card>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack>
                    <CardContent>
                        <Typography gutterBottom variant='h5'>{number}</Typography>
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant='h4'>{title}</Typography>
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom variant='h5'>{new Date(createdAt).toLocaleDateString()}</Typography>
                    </CardContent>
                </Stack>

                <PieChart sx={{}}
                    series={[
                        {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                        },
                    ]}
                    width={200}
                    height={200}
                />
            </Stack>
        </Card>*/
    );
}

export default FolderComponent;