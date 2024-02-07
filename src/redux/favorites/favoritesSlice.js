import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite(state, action) {
      state.item.push(action.payload);
    },
    deleteFromFavorites(state, action) {
      const index = state.item.findIndex(elem => elem === action.payload);
      state.item.splice(index, 1);
    },
  },
});

export const { setFavorite, deleteFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
