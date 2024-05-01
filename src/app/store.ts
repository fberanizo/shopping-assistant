import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from '../features/products/productsSlice';
import pricesReducer from '../features/prices/pricesSlice';
import shoppingListReducer from '../features/shopping-list/shoppingListSlice';

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  products: productsReducer,
  prices: pricesReducer,
  shoppingList: shoppingListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
