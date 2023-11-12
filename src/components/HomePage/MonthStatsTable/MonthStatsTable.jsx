import PaginationMonth from './PaginationMonth';
import { CalendarBox, HeadBox, List, TitleBox } from './MonthStatsTable.styled';
import { useState } from 'react';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';
import DayItemCalendar from './DayItemCalendar';
import { format } from 'date-fns';

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
      {days.length > 0 && (
        <List>
          {days.map(({ year, month, day }) => (
            <DayItemCalendar
              key={`${year}${month}${day}`}
              day={day}
              month={format(new Date(date.year, date.month, date.day), 'MMMM')}
            />
          ))}
        </List>
      )}
    </CalendarBox>
  );
};

export default MonthStatsTable;
