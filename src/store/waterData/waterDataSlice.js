import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';
import { getMonthDays } from './thunk';
import { getMonthDaysFulfilled, getMonthDaysPending } from './operations';

const waterDataSlice = createSlice({
  name: 'waterData',
  initialState: initialState.waterData,
  reducers: {
    setTargetDay: (state, { payload }) => {
      state.targetDay = null;
      state.targetDay = payload;
    },
    removeTargetDay: state => {
      state.targetDay = null;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getMonthDays.pending, getMonthDaysPending)
      .addCase(getMonthDays.fulfilled, getMonthDaysFulfilled),
});

export const waterDataReducer = waterDataSlice.reducer;

export const { setTargetDay, removeTargetDay } = waterDataSlice.actions;
