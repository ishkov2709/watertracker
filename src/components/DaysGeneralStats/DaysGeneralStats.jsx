import Icon from 'components/common/Icon';
import {
  Btn,
  DateMonthTitle,
  Mark,
  MarkTitle,
  Wrapper,
} from './DaysGeneralStats.styled';
import { color } from 'styles/colors';
import { useDispatch } from 'react-redux';
import { removeCoordsDate } from 'store/waterData/waterDataSlice';

const firstOfFourDaysArr = [1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31];

const DaysGeneralStats = ({ dateCoords: { day, month, top, left } }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(removeCoordsDate());
  };
  return (
    <Wrapper
      top={top - 178}
      left={firstOfFourDaysArr.find(el => el === day) ? left : left - 252}
    >
      <Btn onClick={handleClose}>
        <Icon name="plus" stroke={color.primary.blue} />
      </Btn>
      <DateMonthTitle>
        {day}, {month}
      </DateMonthTitle>
      <MarkTitle>
        Daily norma: <Mark>{1.5} L</Mark>
      </MarkTitle>
      <MarkTitle>
        Fulfillment of the daily norm: <Mark>{60}%</Mark>
      </MarkTitle>
      <MarkTitle>
        How many servings of water: <Mark>{6}</Mark>
      </MarkTitle>
    </Wrapper>
  );
};

export default DaysGeneralStats;
