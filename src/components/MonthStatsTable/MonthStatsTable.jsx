import PaginationMonth from 'components/PaginationMonth';
import { CalendarBox, HeadBox, List, TitleBox } from './MonthStatsTable.styled';
import { useState } from 'react';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';
import DayItemCalendar from 'components/DayItemCalendar';

const dateNow = new Date();

const MonthStatsTable = () => {
  const [date, setDate] = useState({
    year: dateNow.getFullYear(),
    month: dateNow.getMonth(),
    day: dateNow.getDate(),
  });

  const days = useDaysOfMonth(date);

  return (
    <CalendarBox>
      <HeadBox>
        <TitleBox>Month</TitleBox>
        <PaginationMonth date={date} setDate={setDate} />
      </HeadBox>
      {days.length && (
        <List>
          {days.map(({ year, month, day }) => (
            <DayItemCalendar key={`${year}${month}${day}`} day={day + 1} />
          ))}
        </List>
      )}
    </CalendarBox>
  );
};

export default MonthStatsTable;
