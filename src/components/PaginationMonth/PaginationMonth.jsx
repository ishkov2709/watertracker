import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Btn, MonthAndYear, Wrapper } from './PaginationMonth.styled';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors';

const PaginationMonth = ({ date, setDate }) => {
  const [titleMonth, setTitleMonth] = useState(
    format(new Date(date.year, date.month, date.day), 'MMMM')
  );

  useEffect(() => {
    if (date) {
      setTitleMonth(format(new Date(date.year, date.month, date.day), 'MMMM'));
    }
  }, [date]);

  const handleIncrementMonth = () => {
    if (date.month + 1 > 11) {
      return setDate(prevState => ({
        ...prevState,
        year: prevState.year + 1,
        month: 0,
      }));
    }
    return setDate(prevState => ({
      ...prevState,
      month: prevState.month + 1,
    }));
  };

  const handleDecrementMonth = () => {
    if (date.month - 1 < 0) {
      return setDate(prevState => ({
        ...prevState,
        year: prevState.year - 1,
        month: 11,
      }));
    }
    return setDate(prevState => ({
      ...prevState,
      month: prevState.month - 1,
    }));
  };

  return (
    <Wrapper>
      <Btn onClick={handleDecrementMonth}>
        <Icon
          name="arrow-down"
          fill={color.primary.blue}
          stroke={color.primary.blue}
          width={14}
          height={14}
        />
      </Btn>
      <MonthAndYear>
        {titleMonth}, {date.year}
      </MonthAndYear>
      <Btn onClick={handleIncrementMonth}>
        <Icon
          name="arrow-down"
          fill={color.primary.blue}
          stroke={color.primary.blue}
          width={14}
          height={14}
        />
      </Btn>
    </Wrapper>
  );
};

export default PaginationMonth;
