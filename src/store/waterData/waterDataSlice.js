import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';
import { getWaterToday,deleteWaterTodayById,saveWaterToday } from './thunk';

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
    todayListModalOpen: state => {
      state.todayListModalOpen = true;
    },
    todayListModalClose: state => {
      state.todayListModalOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getWaterToday.fulfilled, (state, action) => {
        state.dataToday = action.payload
        state.isLoading = false;
      })
      .addCase(getWaterToday.rejected, (state, action) => {
        state.error = 'Error';
      })
      .addCase(deleteWaterTodayById.pending, (state, action) => {
         state.isLoading = true;
      })
      .addCase(deleteWaterTodayById.fulfilled, (state, action) => {
        state.isLoading = false;
         const index = state.dataToday.findIndex(data => data.id === action.payload
            )
            state.dataToday.splice(index, 1);
      })
      .addCase(deleteWaterTodayById.rejected, (state, action) => {
        state.error = 'Error';
      })
      .addCase(saveWaterToday.pending, (state, action) => {
         state.isLoading = true;
      })
      .addCase(saveWaterToday.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataToday.push(action.payload)
      })
      .addCase(saveWaterToday.rejected, (state, action) => {
        state.error = 'Error';
      })
  }
});

export const waterDataReducer = waterDataSlice.reducer;

export const { getCoordsDate, removeCoordsDate, todayListModalClose, todayListModalOpen } = waterDataSlice.actions;
