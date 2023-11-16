export const getMonthDaysPending = state => {
  state.isLoading = true;
};

export const getMonthDaysFulfilled = (state, { payload }) => {
  state.daysOfMonth = payload;
  state.isLoading = false;
};
