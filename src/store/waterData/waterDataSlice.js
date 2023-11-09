import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';

const waterDataSlice = createSlice({
  name: 'waterData',
  initialState: initialState,
  reducers: {},
});

export const waterDataReducer = waterDataSlice.reducer;
