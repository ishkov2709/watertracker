import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://water-tracker.onrender.com/api`;

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteToken = () =>
  (axios.defaults.headers.common.Authorization = '');

export const signInUser = createAsyncThunk(
  'auth/signin',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signUpUser = createAsyncThunk('auth/signup', async newUser => {
  const response = await axios.post('/users/signup', newUser);
  return response.data;
});

export const resendEmail = createAsyncThunk('auth/resend', async user => {
  return await axios.post('/users/verify', user);
});

export const restoreUser = createAsyncThunk('auth/restore', async user => {
  const response = await axios.post('/users/restore', user);
  return response.data;
});

export const logOut = createAsyncThunk(`auth/logout`, async token => {
  return await axios.post(`/users/logout`, token);
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === '') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateDailyNorma = createAsyncThunk(
  `auth/updateDailyNorma`,
  async (newDaliyNorma, thunkAPI) => {
    try {
      const response = await axios.patch(`/users/daily-norma`, {
        dailyNorma: newDaliyNorma,
      });
      return response.data.dailyNorma;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.patch('/users/avatars', formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeUserData = createAsyncThunk(
  'user/changeData',
  async (newUserData, thunkAPI) => {
    try {
      const res = await axios.put('/users', newUserData);

      return res.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    const res = await axios.post('/users/logout');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
