const initialState = {
  auth: {
    user: {
      name: 'Tam',
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
