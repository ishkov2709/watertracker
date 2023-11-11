const initialState = {
  auth: {
    user: {
      name: '',
      email: '',
    },
    isLoggedIn: false,
    isRefreshing: false,
    token: '',
    error: '',
  },
  waterData: {
    dateCoords: null,
  },
};

export default initialState;
