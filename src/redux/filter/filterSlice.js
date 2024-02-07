import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  from: '',
  to: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.brand = action.payload.brand;
      state.price = action.payload.price;
      state.from = action.payload.from;
      state.to = action.payload.to;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
