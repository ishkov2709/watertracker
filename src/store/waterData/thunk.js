import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { format } from 'date-fns';

axios.defaults.baseURL = 'https://water-tracker.onrender.com/api/records';

// const setAuthHeader = () => {
//   axios.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTFkNjc2YTNkZWMwMGM0NjgzOTY5OCIsImlhdCI6MTY5OTkwMDY1MiwiZXhwIjoxNzAwNTA1NDUyfQ.f92ccFG7EW7QoDqoTxmDs-fZ9ohsN2GS0XMdM40i4Cw`;
// };

export const getMonthDays = createAsyncThunk('get/daysMonth', async date => {
  //   setAuthHeader();
  const params = {
    month: format(new Date(date.year, date.month, date.day), 'MMMM'),
    year: date.year,
  };

  const { data } = await axios.get('', { params });
  return data;
});
