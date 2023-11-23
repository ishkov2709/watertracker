import { useDispatch, useSelector } from 'react-redux';
import { Btn, CountDay, Item, Percent } from './DayItemCalendar.styled';
import { setTargetDay, removeTargetDay } from 'store/waterData/waterDataSlice';
import { memo, useContext, useEffect, useState } from 'react';
import {
  dataTodaySelector,
  daysOfMonthSelector,
  selectDailyNorma,
  targetDaySelector,
} from 'store/waterData/selectors';
import { HomeContext } from 'pages/HomePage/HomePage';
import DaysGeneralStats from 'components/MonthStatsTable/DayItemCalendar/DaysGeneralStats';

const dateNow = new Date();

const DayItemCalendar = memo(({ day }) => {
  const { titleMonth, date } = useContext(HomeContext);
  const [percent, setPercent] = useState(0);
  const [dayData, setDayData] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const dispatch = useDispatch();
  const targetDay = useSelector(targetDaySelector);
  const daysOfMonth = useSelector(daysOfMonthSelector);
  const dataToday = useSelector(dataTodaySelector);
  const dailyNorma = useSelector(selectDailyNorma);

  useEffect(() => {
    if (day) {
      setDayData(
        dateNow.getFullYear() === date.year &&
          dateNow.getMonth() === date.month &&
          dateNow.getDate() === day
          ? {
              day: day.day,
              overall: dataToday.reduce((acc, el) => el.dosage + acc, 0),
              servings: dataToday.length,
            }
          : daysOfMonth.find(el => el.day === day)
      );
    }
  }, [setDayData, dataToday, date, day, daysOfMonth]);

  useEffect(() => {
    if (daysOfMonth && dayData) {
      const res =
        dayData.overall >= dailyNorma * 1000
          ? 100
          : Math.round((dayData.overall / (dailyNorma * 1000)) * 100);
      setPercent(res);
    }
  }, [daysOfMonth, setPercent, dayData, dailyNorma]);

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
