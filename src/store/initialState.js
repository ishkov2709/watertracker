const initialState = {
  auth: {
    user: {
      name: '',
      email: '',
      gender: '',
    },
    isLoggedIn: false,
    isRefreshing: false,
    token: '',
  },
  waterData: {},
};

export default initialState;
