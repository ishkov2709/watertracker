import Icon from 'components/common/Icon';
import {
  Btn,
  DateMonthTitle,
  Mark,
  MarkTitle,
  Wrapper,
} from './DaysGeneralStats.styled';
import { color } from 'styles/colors';
import { PropTypes } from 'prop-types';
import { removeTargetDay } from 'store/waterData/waterDataSlice';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

const firstOfFourDaysArr = [1, 2, 3, 4, 11, 12, 13, 14, 21, 22, 23, 24, 31];

const DaysGeneralStats = ({
  targetDay: { day, month, servings = 0, percent },
}) => {
  const dispatch = useDispatch();
  const { dailyNorma } = useAuth();

  const handleClose = () => {
    dispatch(removeTargetDay());
  };

  return (
    <Wrapper isToLeft={firstOfFourDaysArr.includes(day)}>
      <Btn onClick={handleClose}>
        <Icon name="plus" stroke={color.primary.blue} />
      </Btn>
      <DateMonthTitle>
        {day}, {month}
      </DateMonthTitle>
      <MarkTitle>
        Daily norma: <Mark>{dailyNorma} L</Mark>
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

DaysGeneralStats.propTypes = {
  targetDay: PropTypes.shape({
    day: PropTypes.number,
    month: PropTypes.string,
    servings: PropTypes.number,
    percent: PropTypes.number,
  }),
};
