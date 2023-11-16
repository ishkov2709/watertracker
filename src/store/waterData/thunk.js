import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { format } from 'date-fns';

const setAuthHeader = token => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

export const getMonthDays = createAsyncThunk(
  'get/daysMonth',
  async ({ token, date }) => {
    // setAuthHeader(token);
    const params = {
      month: format(new Date(date.year, date.month, date.day), 'MMMM'),
      year: date.year,
    };

    const { data } = await axios.get('/records', { params });
    return data;
  }
);
