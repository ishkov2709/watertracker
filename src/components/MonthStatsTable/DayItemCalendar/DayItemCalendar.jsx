import { useDispatch, useSelector } from 'react-redux';
import { Btn, CountDay, Item, Percent } from './DayItemCalendar.styled';
import { setTargetDay, removeTargetDay } from 'store/waterData/waterDataSlice';
import { memo, useContext, useEffect, useState } from 'react';
import {
  daysOfMonthSelector,
  targetDaySelector,
} from 'store/waterData/selectors';
import DaysGeneralStats from 'components/MonthStatsTable/DayItemCalendar/DaysGeneralStats';
import { HomeContext } from 'pages/HomePage/HomePage';

const DayItemCalendar = memo(({ day }) => {
  const { titleMonth } = useContext(HomeContext);
  const [percent, setPercent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const dispatch = useDispatch();
  const targetDay = useSelector(targetDaySelector);
  const daysOfMonth = useSelector(daysOfMonthSelector);
  const dayData = daysOfMonth.find(el => el.day === day);

  const dailyNorma = 1500;

  useEffect(() => {
    if (daysOfMonth && dayData) {
      const res =
        dayData.overall >= dailyNorma
          ? 100
          : Math.round((dayData.overall / dailyNorma) * 100);
      setPercent(res);
    }
  }, [daysOfMonth, setPercent, dayData]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOnTarget = () => {
    const info = {
      ...dayData,
      month: titleMonth,
      day,
      percent,
    };
    dispatch(setTargetDay(info));
  };

  const handleOffTarget = () => {
    dispatch(removeTargetDay());
  };

  return (
    <Item>
      {isDesktop ? (
        <Btn
          onMouseEnter={handleOnTarget}
          onMouseLeave={handleOffTarget}
          isDone={percent === 100}
        >
          <CountDay>{day}</CountDay>
        </Btn>
      ) : (
        <Btn onClick={handleOnTarget} isDone={percent === 100}>
          <CountDay>{day}</CountDay>
        </Btn>
      )}

      <Percent>{percent}%</Percent>

      {targetDay?.day === day && <DaysGeneralStats targetDay={targetDay} />}
    </Item>
  );
});

export default DayItemCalendar;
