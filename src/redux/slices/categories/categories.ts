import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState';
import { Category } from "@/core/types";
import { RootState } from "@/redux/store.ts";

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories} = restaurantSlice.actions;
export const selectCategories = ({ categories }: RootState): Category[] => categories.categories;
export const categoriesReducer = restaurantSlice.reducer;