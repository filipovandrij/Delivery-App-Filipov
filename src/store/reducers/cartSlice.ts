import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGood } from '../../models/IGood';

interface CartState {
    cart: IGood[];
}

const initialState: CartState = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGoodToCart: (state, action: PayloadAction<IGood>) => {
            let newCart = [...state.cart];
            const found = state.cart.find(({ id }) => id === action.payload.id);

            if (found) {
                newCart = newCart.map(item => {
                    return item.id === action.payload.id
                        ? {
                              ...item,
                              quantity:
                                  action.payload.quantity || item.quantity + 1
                          }
                        : item;
                });
            } else newCart.push({ ...action.payload, quantity: 1 });

            state.cart = newCart;
        },
        deleteGoodFromCart: (state, action: PayloadAction<IGood>) => {
            const newCart = state.cart.filter(
                ({ id }) => id !== action.payload.id
            );

            state.cart = newCart;
        },
        clearCart: state => {
            state.cart = [];
        }
    }
});

export const { addGoodToCart, clearCart, deleteGoodFromCart } =
    cartSlice.actions;

export default cartSlice.reducer;
