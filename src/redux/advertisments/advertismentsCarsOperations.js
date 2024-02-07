import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   addAdvertisment,
//   deleteAdvertisment,
//   fetchAdvertisments,
// } from 'services/api';
import { errorMsg } from 'helpers/notifications';

export const fetchAdvertismentsThunk = createAsyncThunk(
  'advertisments/fetchAdvertismentsThunk',
  async (page, thunkApi) => {
    const queryInstance = axios.create({
      baseURL: 'https://657834bbf08799dc804489bf.mockapi.io/api',
      params: {
        page,
        limit: 12,
      },
    });
    try {
      const { data } = await queryInstance.get('/advert');
      return data;
    } catch (error) {
      errorMsg('Something went wrong try again');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const addAdvertismentThunk = createAsyncThunk(
//   'advertisments/addAdvertismentThunk',
//   async (
//     {
//       year,
//       make,
//       model,
//       type,
//       img,
//       description,
//       fuelConsumption,
//       engineSize,
//       accessories,
//       functionalities,
//       rentalPrice,
//       rentalCompany,
//       address,
//       rentalConditions,
//       mileage,
//     },
//     thunkApi
//   ) => {
//     try {
//       const data = await addAdvertisment({
//         year,
//         make,
//         model,
//         type,
//         img,
//         description,
//         fuelConsumption,
//         engineSize,
//         accessories,
//         functionalities,
//         rentalPrice,
//         rentalCompany,
//         address,
//         rentalConditions,
//         mileage,
//       });
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteAdvertismentThunk = createAsyncThunk(
//   'advertisments/deleteAdvertismentThunk',
//   async (advertId, thunkApi) => {
//     try {
//       const data = await deleteAdvertisment(advertId);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
