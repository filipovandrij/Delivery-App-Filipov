import { FC } from 'react';
import { Box, Grid, List } from '@mui/material';

interface Props {
    children: JSX.Element[];
    widthItem: number;
    height?: number;
}

const GoodsList: FC<Props> = ({ children, widthItem, height = 85 }) => {
    return (
        <Box
            sx={{
                border: '1.5px solid gray',
                borderRadius: '10px',
                p: '0 10px'
            }}
        >
            <List
                sx={{
                    width: '100%',

                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    height: `${height}vh`,
                    '& ul': { padding: 0 },
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                <Grid container justifyContent={'space-around'} gap={3}>
                    {children.map((item, index) => (
                        <Grid item xs={widthItem} key={index}>
                            {item}
                        </Grid>
                    ))}
                </Grid>
            </List>
        </Box>
    );
};

export default GoodsList;
