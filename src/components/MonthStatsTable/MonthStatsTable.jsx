import { CalendarBox, HeadBox, List, TitleBox } from './MonthStatsTable.styled';
import { useContext } from 'react';
import { useDaysOfMonth } from 'hooks/useDaysOfMonth';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'store/waterData/selectors';
import { HomeContext } from 'pages/HomePage/HomePage';
import PaginationMonth from './PaginationMonth';
import DayItemCalendar from './DayItemCalendar';

const MonthStatsTable = () => {
  const { date } = useContext(HomeContext);
  const days = useDaysOfMonth(date);
  const isLoading = useSelector(isLoadingSelector);

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
