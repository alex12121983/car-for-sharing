import { createSelector } from '@reduxjs/toolkit';

export const selectAdvertisments = state => state.advertisments.advertisments;
export const selectIsLoading = state => state.advertisments.isLoading;
export const selectError = state => state.advertisments.error;

export const selectFilter = state => state.filter;

export const selectFilteredAdvertisment = createSelector(
  [selectAdvertisments, selectFilter],
  (advertisments, filter) => {
    return advertisments.filter(advertisment =>
      advertisment.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
