import { useContext, useEffect } from 'react';
import { Btn, MonthAndYear, Wrapper } from './PaginationMonth.styled';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors';
import { HomeContext } from 'pages/HomePage/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { swithChangeNote } from 'store/waterData/waterDataSlice';
import { defineMonth } from 'utils/defineMonth';
import { isLoadingSelector } from 'store/waterData/selectors';

const PaginationMonth = () => {
  const { date, setDate, titleMonth, setTitleMonth } = useContext(HomeContext);
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    if (date) {
      setTitleMonth(defineMonth(date.year, date.month, date.day));
    }
  }, [date, setTitleMonth]);

  const handleIncrementMonth = () => {
    if (date.month + 1 > 11) {
      setDate(prevState => ({
        ...prevState,
        year: prevState.year + 1,
        month: 0,
      }));
      return dispatch(swithChangeNote(true));
    }
    setDate(prevState => ({
      ...prevState,
      month: prevState.month + 1,
    }));
    return dispatch(swithChangeNote(true));
  };

  const handleDecrementMonth = () => {
    if (date.month - 1 < 0) {
      setDate(prevState => ({
        ...prevState,
        year: prevState.year - 1,
        month: 11,
      }));
      return dispatch(swithChangeNote(true));
    }
    setDate(prevState => ({
      ...prevState,
      month: prevState.month - 1,
    }));
    return dispatch(swithChangeNote(true));
  };

  return (
    <Wrapper>
      <Btn onClick={handleDecrementMonth} disabled={isLoading}>
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
      <Btn onClick={handleIncrementMonth} disabled={isLoading}>
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
