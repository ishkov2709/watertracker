import { Btn, CountDay, Item, Percent } from './DayItemCalendar.styled';

const DayItemCalendar = ({ day }) => {
  return (
    <Item>
      <Btn>
        <CountDay>{day}</CountDay>
      </Btn>
      <Percent>100%</Percent>
    </Item>
  );
};

export default DayItemCalendar;