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
    dataToday: [],
    todayListModalOpen: false,
    targetDay: null,
    daysOfMonth: [],
    isLoading: false,
    isChangeNote: true,
  },
};

export default initialState;
