import { CalendarBox, HeadBox, List, TitleBox } from './MonthStatsTable.styled';
import { useContext } from 'react';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';
import { HomeContext } from 'pages/HomePage/HomePage';
import PaginationMonth from './PaginationMonth';
import DayItemCalendar from './DayItemCalendar';
import { useWaterData } from 'hooks/useWaterData';

const MonthStatsTable = () => {
  const { date } = useContext(HomeContext);
  const days = useDaysOfMonth(date);
  const { isLoading } = useWaterData();

  return (
    <CalendarBox>
      <HeadBox>
        <TitleBox>Month</TitleBox>
        <PaginationMonth />
      </HeadBox>
      {days.length > 0 && !isLoading && (
        <List>
          {days.map(({ year, month, day }) => {
            return <DayItemCalendar key={`${year}${month}${day}`} day={day} />;
          })}
        </List>
      )}
    </CalendarBox>
  );
};

export default MonthStatsTable;
