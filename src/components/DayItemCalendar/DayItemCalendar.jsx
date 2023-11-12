import { useDispatch } from 'react-redux';
import { Btn, CountDay, Item, Percent } from './DayItemCalendar.styled';
import {
  getCoordsDate,
  removeCoordsDate,
} from 'store/waterData/waterDataSlice';
import { useEffect, useState } from 'react';

const DayItemCalendar = ({ day, month }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const dispatch = useDispatch();

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
    const coords = {
      day,
      month,
      top: e.target.getBoundingClientRect().top,
      left: e.target.getBoundingClientRect().left,
    };
    dispatch(getCoordsDate(coords));
  };

  const handleOffTarget = () => {
    dispatch(removeCoordsDate());
  };

  return (
    <Item>
      {isDesktop ? (
        <Btn onMouseEnter={handleOnTarget} onMouseLeave={handleOffTarget}>
          <CountDay>{day}</CountDay>
        </Btn>
      ) : (
        <Btn onClick={handleOnTarget}>
          <CountDay>{day}</CountDay>
        </Btn>
      )}

      <Percent>100%</Percent>
    </Item>
  );
};

export default DayItemCalendar;
