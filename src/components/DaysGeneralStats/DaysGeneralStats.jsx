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
import { removeTargetDay } from 'store/waterData/waterDataSlice';

const firstOfFourDaysArr = [1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31];

const DaysGeneralStats = ({
  targetDay: { day, month, top, left, servings = 0, percent },
}) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(removeTargetDay());
  };

  const dailyNorma = 1500;

  return (
    <Wrapper
      top={top - 188}
      left={firstOfFourDaysArr.find(el => el === day) ? left : left - 252}
    >
      <Btn onClick={handleClose}>
        <Icon name="plus" stroke={color.primary.blue} />
      </Btn>
      <DateMonthTitle>
        {day}, {month}
      </DateMonthTitle>
      <MarkTitle>
        Daily norma: <Mark>{dailyNorma / 1000} L</Mark>
      </MarkTitle>
      <MarkTitle>
        Fulfillment of the daily norm: <Mark>{percent}%</Mark>
      </MarkTitle>
      <MarkTitle>
        How many servings of water: <Mark>{servings}</Mark>
      </MarkTitle>
    </Wrapper>
  );
};

export default DaysGeneralStats;
