import { FC, useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useAppSelector } from '../hooks/redux';
import { sumBy } from '../utils/sumBy';
import DeliveryForm from '../components/DeliveryForm/DeliveryForm';
import GoodsList from '../components/GoodsList/GoodsList';
import CartGoodItem from '../components/CartGoodItem/CartGoodItem';
import ModalSuccess from '../components/Modal/ModalSuccess';

const ShopCartPage: FC = () => {
    const { cart } = useAppSelector(state => state.cartReducer);

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (!cart.length) {
            setIsValid(false);
        }
    }, [cart]);

    const getValid = (valid: boolean) => {
        if (cart.length) {
            setIsValid(valid);
        }
    };

    return (
        <Container sx={{ p: '15px 0' }}>
            <Grid container spacing={2} marginBottom={'20px'}>
                <Grid item xs={6}>
                    <DeliveryForm getValid={getValid} />
                </Grid>
                <Grid item xs={6}>
                    {cart.length ? (
                        <GoodsList widthItem={12} height={75}>
                            {cart.map(item => (
                                <CartGoodItem cartGood={item} key={item.id} />
                            ))}
                        </GoodsList>
                    ) : (
                        <EmptyList />
                    )}
                </Grid>
            </Grid>
            <Grid container justifyContent={'flex-end'} spacing={10}>
                <Grid item>
                    <Typography variant='h5'>
                        Total price:{' '}
                        {sumBy(
                            cart.map(({ quantity, price }) => quantity * price)
                        )}
                        $
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        type='submit'
                        form='delivery-form'
                        onClick={() => setOpenModal(true)}
                        disabled={!isValid}
                    >
                        order
                    </Button>
                </Grid>
            </Grid>
            {openModal && <ModalSuccess openModal={true} />}
        </Container>
    );
};

const EmptyList = () => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                border: '1.5px solid gray',
                borderRadius: '10px',
                p: '0 10px',
                height: `75vh`
            }}
        >
            <Typography variant='h3'>Cart is empty</Typography>
        </Box>
    );
};

export default ShopCartPage;
