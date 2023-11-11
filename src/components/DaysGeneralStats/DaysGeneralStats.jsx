import Icon from 'components/Icon';
import {
  Btn,
  DateMonthTitle,
  Mark,
  MarkTitle,
  Wrapper,
} from './DaysGeneralStats.styled';
import { color } from 'styles/colors';

const DaysGeneralStats = () => {
  return (
    <Wrapper>
      <Btn>
        <Icon name="plus" stroke={color.primary.brue} />
      </Btn>
      <DateMonthTitle>5, April</DateMonthTitle>
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
