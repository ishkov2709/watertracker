import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
//axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const deleteToken = () =>
  (axios.defaults.headers.common.Authorization = '');

export const signInUser = createAsyncThunk('auth/signin', async user => {
  const response = await axios.post('/signin', user);
  setToken(response.data.token);
  console.log(response.data.token);
  return response.data;
});

export const signUpUser = createAsyncThunk('auth/signup', async newUser => {
  const response = await axios.post('/signup', newUser);
  setToken(response.data.token);
  return response.data;
});

export const logOut = createAsyncThunk(`auth/logout`, async token => {
  return await axios.post(`/logout`, token);
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (user, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      setToken(token);
      const response = await axios.get('/current', user);
      setToken(response.data.token);
      console.log(response.data.token);
      setToken(token);
      return response.data;
    } catch (error) {
      return rejectWithValue('');
    }
  }
);
