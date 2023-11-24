import TodayWaterListItem from '../TodayWaterListItem/TodayWaterListItem';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors';
import {
  TodayWaterListContainer,
  TodayWaterListHeader,
  TodayWaterListing,
  AddWaterButton,
  TodayWaterListItemContainer,
} from './TodayWaterList.styled';
import { useSelector } from 'react-redux';
import { dataTodaySelector, selectIsLoading } from 'store/waterData/selectors';
import Loader from 'components/common/Loader';
import { useContext } from 'react';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';
import TodayListModal from 'components/TodayListModal/TodayListModal';

const TodayWaterList = () => {
  const toggleModal = useContext(ModalContext);
  const waterItems = useSelector(dataTodaySelector);
  const isLoading = useSelector(selectIsLoading);

  const handleClickAdd = () => {
    toggleModal(<TodayListModal />);
  };

  return (
    <TodayWaterListContainer>
      {isLoading && <Loader />}
      <TodayWaterListHeader>Today</TodayWaterListHeader>
      <TodayWaterListing>
        {waterItems.map(waterItem => (
          <TodayWaterListItemContainer key={waterItem._id}>
            <TodayWaterListItem waterInfo={waterItem} />
          </TodayWaterListItemContainer>
        ))}
      </TodayWaterListing>
      <AddWaterButton onClick={handleClickAdd}>
        {' '}
        <Icon name="plus" stroke={color.primary.blue} /> Add Water
      </AddWaterButton>
    </TodayWaterListContainer>
  );
};

export default TodayWaterList;
