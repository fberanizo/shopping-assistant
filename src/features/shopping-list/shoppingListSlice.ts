import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchLatestPrice } from './../prices/pricesAPI';

export interface ShoppingListState {
  items: Array<string>;
  prices: Array<number>;
  checked: Array<boolean>;
}

const initialSize = 30;
const initialState: ShoppingListState = {
  items: Array(initialSize).fill(""),
  prices: Array(initialSize).fill(0),
  checked: Array(initialSize).fill(false)
};

export interface Item {
  item: string,
  index: number,
}

export const fetchLatestPriceAsync = createAsyncThunk(
  'prices/fetchLatestPrice',
  async (item: Item) => {
    const response = await fetchLatestPrice(item.item, item.index);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const checkItemAsync = createAsyncThunk(
  'prices/checkItem',
  async (index: number) => {
    return index;
  }
);

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLatestPriceAsync.fulfilled, (state, { payload }) => {
      state.items[payload.index] = payload.item;
      if (payload.price != null) {
        state.prices[payload.index] = payload.price;
      }
    })
    builder.addCase(fetchLatestPriceAsync.rejected, (state) => {
      state = {items: [], prices: [], checked: []};
    })
    builder.addCase(checkItemAsync.fulfilled, (state, { payload }) => {
      state.checked[payload] = !state.checked[payload];
    })
  },
});

export const viewPriceAsync = (item: string, index: Number) => async (dispatch: Function) => {
  dispatch(fetchLatestPriceAsync(({item: item, index: index} as Item)));
};

export const checkItem = (index: number) => async (dispatch: Function) => {
  dispatch(checkItemAsync(index));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const shoppingListSelector = (state: RootState) => state.shoppingList;

export default shoppingListSlice.reducer;
