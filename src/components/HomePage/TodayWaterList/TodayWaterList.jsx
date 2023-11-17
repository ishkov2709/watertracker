import TodayWaterListItem from '../TodayWaterListItem/TodayWaterListItem';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors';
import {
  TodayWaterListContainer,
  TodayWaterListHeader,
  TodayWaterListing,
  AddWaterButton,
} from './TodayWaterList.styled';
const waterItems = [
  {
    _id: '654e2ea72de1793f78f30405',
    dosage: 350,
    time: '8:00',
    day: 19,
    month: 'November',
  },
  {
    _id: '654e2eb02de1793f78f30407',
    dosage: 350,
    time: '10:00',
    day: 19,
    month: 'November',
  },
  {
    _id: '654e2ea72de1793f78f30408',
    dosage: 250,
    time: '12:00',
    day: 19,
    month: 'November',
  },
  {
    _id: '654e2eb02de1793f78f30409',
    dosage: 350,
    time: '14:00',
    day: 19,
    month: 'November',
  },
];

const TodayWaterList = () => {
  return (
    <TodayWaterListContainer>
      <TodayWaterListHeader>Today</TodayWaterListHeader>
      <TodayWaterListing>
        {waterItems.map(waterItem => (
          <li key={waterItem._id}>
            <TodayWaterListItem waterInfo={waterItem} />
          </li>
        ))}
        <AddWaterButton>
          {' '}
          <Icon name="plus" stroke={color.primary.blue} /> Add Water
        </AddWaterButton>
      </TodayWaterListing>
    </TodayWaterListContainer>
  );
};

export default TodayWaterList;
