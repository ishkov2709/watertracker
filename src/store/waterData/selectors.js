import { createSelector } from '@reduxjs/toolkit';

export const dataTodaySelector = state => state.waterData.dataToday;

export const selectDailyNorma = state => state.auth.user.dailyNorma;

export const selectTotalTodayDailyWater = createSelector(
  dataTodaySelector,
  selectDailyNorma,
  (waterData, norma) => {
    const totalTodayWater = waterData.reduce((total, waterData) => {
      return total + waterData.dosage;
    }, 0);
    return Number((totalTodayWater / 1000 / norma) * 100).toFixed(0);
  }
);

export const selectIsLoading = state => state.waterData.isLoading;

export const selectTodayListModalOpen = state =>
  state.waterData.todayListModalOpen;
  
export const targetDaySelector = state => state.waterData.targetDay;

export const daysOfMonthSelector = state => state.waterData.daysOfMonth;

export const isLoadingSelector = state => state.waterData.isLoading;

export const isChangeNoteSelector = state => state.waterData.isChangeNote;
