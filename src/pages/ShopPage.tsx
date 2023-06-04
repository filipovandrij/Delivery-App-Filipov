import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchAllShops } from '../store/reducers/shopSlice';
import { IGood } from '../models/IGood';
import ShopsList from '../components/ShopsList/ShopsList';
import GoodsList from '../components/GoodsList/GoodsList';
import GoodItem from '../components/GoodItem/GoodItem';

const ShopPage = () => {
    const dispatch = useAppDispatch();
    const { shops } = useAppSelector(state => state.shopReducer);

    const [shopsList, setShopList] = useState<IGood[]>([]);

    useEffect(() => {
        dispatch(fetchAllShops());
    }, [dispatch]);

    useEffect(() => {
        if (shops.length) {
            setShopList(shops[0].goods);
        }
    }, [shops]);

    function getIdShop(id: number) {
        const list = shops.filter(item => item.id === id);
        setShopList(list[0].goods);
    }

    return (
        <Container sx={{ p: '15px 0px' }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ShopsList shops={shops} getIdShop={getIdShop} />
                </Grid>
                <Grid item xs={8}>
                    <GoodsList widthItem={4}>
                        {shopsList.map(item => (
                            <GoodItem good={item} key={item.id} />
                        ))}
                    </GoodsList>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ShopPage;
