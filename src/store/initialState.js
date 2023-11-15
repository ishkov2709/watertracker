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
    dailyNorma: 1.5,
    dateCoords: [],
    dataToday: [],
    isLoading: false,
    todayListModalOpen: false
  },
};

export default initialState;
