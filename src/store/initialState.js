const initialState = {
  auth: {
    user: {
      username: '',
      email: '',
      avatarURL: '',
      gender: '',
      dailyNorma: '',
    },
    isLoggedIn: false,
    isRefreshing: false,
    token: '',
    error: '',
  },
  waterData: {
    dataToday: [],
    todayListModalOpen: false,
    targetDay: null,
    daysOfMonth: [],
    isLoading: false,
    isChangeNote: true,
  },
};

export default initialState;
