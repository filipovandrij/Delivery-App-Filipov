import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IShop } from '../../models/IShop';
import promise from '../../api/api';

interface ShopState {
    shops: IShop[];
    loading: boolean;
    error: string | null;
}

export const fetchAllShops = createAsyncThunk<
    IShop[],
    undefined,
    { rejectValue: string }
>('shops/fetchAll', async function (_, { rejectWithValue }) {
    const response = await promise;

    return response;
});

const initialState: ShopState = {
    shops: [],
    loading: false,
    error: null
};

const shopSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAllShops.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllShops.fulfilled, (state, action) => {
                state.shops = action.payload;
                state.loading = false;
            })
            .addCase(fetchAllShops.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                }
            });
    }
});

export default shopSlice.reducer;
