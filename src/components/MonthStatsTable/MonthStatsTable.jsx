import PaginationMonth from '../PaginationMonth';
import DayItemCalendar from '../DayItemCalendar';
import { CalendarBox, HeadBox, List, TitleBox } from './MonthStatsTable.styled';
import { useEffect, useState } from 'react';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';
import { format } from 'date-fns';
import { getMonthDays } from 'store/waterData/thunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  daysOfMonthSelector,
  isLoadingSelector,
} from 'store/waterData/selectors';
import { tokenSelector } from 'store/auth/selectors';

const dateNow = new Date();

const MonthStatsTable = () => {
  const [date, setDate] = useState({
    year: dateNow.getFullYear(),
    month: dateNow.getMonth(),
    day: dateNow.getDate(),
  });
  const [titleMonth, setTitleMonth] = useState(
    format(new Date(date.year, date.month, date.day), 'MMMM')
  );
  const dispatch = useDispatch();
  const days = useDaysOfMonth(date);
  const daysOfMonth = useSelector(daysOfMonthSelector);
  const isLoading = useSelector(isLoadingSelector);
  const token = useSelector(tokenSelector);

  useEffect(() => {
    if (date) {
      const { year, month, day } = date;
      setTitleMonth(format(new Date(year, month, day), 'MMMM'));
      dispatch(getMonthDays({ token, date }));
    }
  }, [date, dispatch]);

  return (
    <CalendarBox>
      <HeadBox>
        <TitleBox>Month</TitleBox>
        <PaginationMonth date={date} setDate={setDate} />
      </HeadBox>
      {days.length > 0 && !isLoading && (
        <List>
          {days.map(({ year, month, day }) => {
            const dayData = daysOfMonth.find(el => el.day === day);
            return (
              <DayItemCalendar
                key={`${year}${month}${day}`}
                day={day}
                month={titleMonth}
                dayData={dayData}
              />
            );
          })}
        </List>
      )}
    </CalendarBox>
  );
};

export default MonthStatsTable;
