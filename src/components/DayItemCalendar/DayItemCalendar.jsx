import { useDispatch } from 'react-redux';
import { Btn, CountDay, Item, Percent } from './DayItemCalendar.styled';
import { setTargetDay, removeTargetDay } from 'store/waterData/waterDataSlice';
import { memo, useEffect, useState } from 'react';

const DayItemCalendar = memo(({ day, month, dayData }) => {
  const [percent, setPercent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const dispatch = useDispatch();

  const dailyNorma = 1500;

  useEffect(() => {
    const isDoneNorma = dayData?.overall >= dailyNorma ?? false;
    const res = isDoneNorma
      ? 100
      : dayData
      ? Math.round((dayData.overall / dailyNorma) * 100)
      : 0;
    setPercent(res);
  }, [setPercent, dayData]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOnTarget = e => {
    const info = {
      ...dayData,
      month,
      day,
      percent,
      top: e.target.getBoundingClientRect().top,
      left: e.target.getBoundingClientRect().left,
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
    </Item>
  );
});

export default DayItemCalendar;
