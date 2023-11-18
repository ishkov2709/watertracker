export const getMonthDaysPending = state => {
  state.isLoading = true;
  state.daysOfMonth = [];
};

export const getMonthDaysFulfilled = (state, { payload }) => {
  state.daysOfMonth = payload;
  state.isLoading = false;
  state.isChangeNote = false;
};
