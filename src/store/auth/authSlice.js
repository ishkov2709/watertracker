import { createSlice } from '@reduxjs/toolkit';
import initialState from 'store/initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  reducers: {},
});

export const authReducer = authSlice.reducer;
