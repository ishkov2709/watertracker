const initialState = {
  auth: {
    user: {
      name: '',
      email: 'tam@gmail.com',
      gender: '',
    },
    isLoggedIn: true,
    isRefreshing: false,
    token: '',
  },
  waterData: {},
};

export default initialState;
