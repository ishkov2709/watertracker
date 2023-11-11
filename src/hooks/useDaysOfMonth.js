import { useEffect, useState } from 'react';

export const useDaysOfMonth = date => {
  const [days, setDays] = useState(0);
  const arrMonth = [];

  useEffect(() => {
    if (date) {
      setDays(new Date(date.year, date.month + 1, 0).getDate());
    }
  }, [date]);

  for (let i = 1; i <= days; i++) {
    arrMonth.push({ year: date.year, month: date.month, day: i });
  }

  return arrMonth;
};
