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
    dailyNorma: 1.5,
    dateCoords: [],
    dataToday: [],
    isLoading: false,
    todayListModalOpen: false,
    targetDay: null,
    daysOfMonth: [],
    //isLoading: false,
  },
};

export default initialState;
