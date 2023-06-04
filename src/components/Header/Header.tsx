import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    ThemeProvider,
    Toolbar,
    Typography,
    styled
} from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useAppSelector } from '../../hooks/redux';
import { buttonColor } from '../../styles/theme-styles';
import './Header.scss';

const Header: FC = () => {
    const { cart } = useAppSelector(state => state.cartReducer);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px'
        }
    }));

    return (
        <AppBar position='static'>
            <Container>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='h4'>Delivery</Typography>
                    <Box>
                        <ThemeProvider theme={buttonColor}>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                <Button color='secondary'>Shop</Button>
                            </NavLink>
                        </ThemeProvider>
                        <NavLink
                            to='/shopcart'
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            <IconButton aria-label='cart'>
                                <StyledBadge
                                    badgeContent={cart.length}
                                    color='secondary'
                                >
                                    <ShoppingCart sx={{ color: '#FFF' }} />
                                </StyledBadge>
                            </IconButton>
                        </NavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
