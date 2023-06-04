import { FC } from 'react';
import { Box, Button, List, ListItem, ListSubheader } from '@mui/material';
import { IShop } from '../../models/IShop';

interface Props {
    shops: IShop[];
    getIdShop: (id: number) => void;
}

const ShopsList: FC<Props> = ({ shops, getIdShop }) => {
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
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    height: '85vh',
                    '& ul': { padding: 0 },
                    padding: '0 0 10px'
                }}
            >
                <ListSubheader
                    color='inherit'
                    sx={{ fontWeight: '700', textAlign: 'center' }}
                >
                    Shops:
                </ListSubheader>
                {shops.map(item => (
                    <ListItem
                        sx={{
                            justifyContent: 'center',
                            m: '10px auto'
                        }}
                        key={item.id}
                    >
                        <Button
                            variant='outlined'
                            sx={{ width: '75%', height: '50px' }}
                            onClick={() => getIdShop(item.id)}
                        >
                            {item.name}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ShopsList;
