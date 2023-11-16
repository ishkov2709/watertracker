const initialState = {
  auth: {
    user: {
      username: '',
      email: '',
      avatarURL: '',
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
