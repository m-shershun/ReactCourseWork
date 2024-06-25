import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { categoriesReducer } from '@/redux/slices/categories';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof reducer>;

const reducer: Reducer = combineReducers({
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
});

export { store };
export type { AppDispatch, RootState };