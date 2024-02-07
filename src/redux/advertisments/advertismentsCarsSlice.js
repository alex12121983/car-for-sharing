import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
import { fetchAdvertismentsThunk } from './advertismentsCarsOperations';

const initialState = {
  advertisments: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const advertismentsSlice = createSlice({
  name: 'advertisments',
  initialState,
  reducers: {
    advertismentsReset(state) {
      state.advertisments = [];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdvertismentsThunk.pending, handlePending)
      .addCase(fetchAdvertismentsThunk.rejected, handleRejected)
      .addCase(fetchAdvertismentsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.advertisments = action.payload;
      }),
  // .addCase(addAdvertismentThunk.pending, handlePending)
  // .addCase(addAdvertismentThunk.rejected, handleRejected)
  // .addCase(addAdvertismentThunk.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.advertisments.push(action.payload);
  // })
  // .addCase(deleteAdvertismentThunk.pending, handlePending)
  // .addCase(deleteAdvertismentThunk.rejected, handleRejected)
  // .addCase(deleteAdvertismentThunk.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;

  //   state.advertisments = state.advertisments.filter(
  //     advertisment => advertisment.id !== action.payload.id
  //   );
  // }),
});

// const persistConfig = {
//   key: 'notices',
//   storage,
//   whitelist: ['advertisments'],
// };

// export const advertismentReducer = persistReducer(
//   persistConfig,
//   advertismentsSlice.reducer
// );
export const { advertismentsReset } = advertismentsSlice.actions;
export const advertismentReducer = advertismentsSlice.reducer;
