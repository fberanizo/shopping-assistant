import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import pricesReducer from '../features/prices/pricesSlice';
import shoppingListReducer from '../features/shopping-list/shoppingListSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    prices: pricesReducer,
    shoppingList: shoppingListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
