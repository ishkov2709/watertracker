import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMonthDays = createAsyncThunk('get/daysMonth', async params => {
  const { data } = await axios.get('/records', { params });
  return data;
});
