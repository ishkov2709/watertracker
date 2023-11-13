import { useEffect, useState } from 'react';

export const useDaysOfMonth = date => {
  const [days, setDays] = useState(0);
  const [arrMonth, setArrMonth] = useState([]);

  useEffect(() => {
    const generateDaysArray = () => {
      const arr = [];
      for (let i = 1; i <= days; i++) {
        arr.push({ year: date.year, month: date.month, day: i });
      }
      setArrMonth(arr);
    };

    if (date) {
      setDays(new Date(date.year, date.month + 1, 0).getDate());
      setArrMonth([]);
    }

    generateDaysArray();
  }, [date, days]);

  return arrMonth;
};
