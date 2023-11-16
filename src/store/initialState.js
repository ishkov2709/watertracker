const initialState = {
  auth: {
    user: {
      username: '',
      email: '',
    },
    isLoggedIn: false,
    isRefreshing: false,
    token: '',
    error: '',
  },
  waterData: {
    targetDay: null,
    daysOfMonth: [],
    isLoading: false,
  },
};

export default initialState;
