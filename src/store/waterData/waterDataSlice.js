import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';
import { getWaterToday, deleteWaterTodayById, saveWaterToday, editWaterTodayById } from './thunk';
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
        state.dataToday.sort(function(a, b){return a.time.localeCompare(b.time)});
      })
      .addCase(getWaterToday.rejected, (state, action) => {
        state.error = 'Error';
      })
      .addCase(deleteWaterTodayById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteWaterTodayById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataToday= [...state.dataToday.filter(data => data._id !== action.payload)]
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
      .addCase(editWaterTodayById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editWaterTodayById.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.dataToday.findIndex(data => data._id === action.payload._id
        )
        state.dataToday.splice(index, 1, action.payload);
        state.dataToday.sort(function(a, b){return a.time.localeCompare(b.time)});
      })
      .addCase(editWaterTodayById.rejected, (state, action) => {
        state.error = 'Error';
      })
      .addCase(getMonthDays.pending, getMonthDaysPending)
      .addCase(getMonthDays.fulfilled, getMonthDaysFulfilled) 
  }
})

//   extraReducers: builder =>
//     builder
//       .addCase(getMonthDays.pending, getMonthDaysPending)
//       .addCase(getMonthDays.fulfilled, getMonthDaysFulfilled),
// });

export const waterDataReducer = waterDataSlice.reducer;

export const { getCoordsDate, removeCoordsDate, todayListModalClose, todayListModalOpen } = waterDataSlice.actions;
export const { setTargetDay, removeTargetDay } = waterDataSlice.actions;
