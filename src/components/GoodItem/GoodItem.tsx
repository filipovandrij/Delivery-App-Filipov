import { FC } from 'react';
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { IGood } from '../../models/IGood';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addGoodToCart } from '../../store/reducers/cartSlice';

interface Props {
    good: IGood;
}

const GoodItem: FC<Props> = ({ good }) => {
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector(state => state.cartReducer);

    const { id, name, price, image } = good;
    const handler = () => {
        dispatch(addGoodToCart(good));
    };

    return (
        <Card>
            <CardMedia component='img' alt={name} image={image} height='200' />
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant='subtitle1' component='div'>
                    {name}
                </Typography>
                <Typography variant='body1' component='div' mb={'10px'}>
                    {price}$
                </Typography>
                {cart.find(good => good.id === id) ? (
                    <Typography variant='h6' component='div'>
                        <CheckIcon color='success' />
                        In cart
                    </Typography>
                ) : (
                    <Button
                        variant='outlined'
                        size='small'
                        sx={{ justifySelf: 'flex-end' }}
                        onClick={handler}
                    >
                        Add to cart
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default GoodItem;
