import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';

const waterDataSlice = createSlice({
  name: 'waterData',
  initialState: initialState.waterData,
  reducers: {
    getCoordsDate: (state, { payload }) => {
      state.dateCoords = null;
      state.dateCoords = payload;
    },
    removeCoordsDate: state => {
      state.dateCoords = null;
    },
  },
});

export const waterDataReducer = waterDataSlice.reducer;

export const { getCoordsDate, removeCoordsDate } = waterDataSlice.actions;
