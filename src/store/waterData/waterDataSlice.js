import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';
import { getWaterToday, deleteWaterTodayById, saveWaterToday } from './thunk';
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
    swithChangeNote: (state, { payload }) => {
      state.isChangeNote = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getWaterToday.fulfilled, (state, action) => {
        state.dataToday = action.payload;
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
        const index = state.dataToday.findIndex(data =>  data._id === action.payload.id)
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
        state.dataToday.push(action.payload);
      })
      .addCase(saveWaterToday.rejected, (state, action) => {
        state.error = 'Error';
      })
      .addCase(getMonthDays.pending, getMonthDaysPending)
      .addCase(getMonthDays.fulfilled, getMonthDaysFulfilled);
  },
});

//   extraReducers: builder =>
//     builder
//       .addCase(getMonthDays.pending, getMonthDaysPending)
//       .addCase(getMonthDays.fulfilled, getMonthDaysFulfilled),
// });

export const waterDataReducer = waterDataSlice.reducer;

export const {
  setTargetDay,
  removeTargetDay,
  todayListModalClose,
  todayListModalOpen,
  swithChangeNote,
} = waterDataSlice.actions;
