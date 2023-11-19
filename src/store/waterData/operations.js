export const getMonthDaysPending = state => {
  state.isLoading = true;
  state.daysOfMonth = [];
  state.isChangeNote = false;
};

export const getMonthDaysFulfilled = (state, { payload }) => {
  state.daysOfMonth = payload;
  state.isLoading = false;
};
