import {
  ButtonControl,
  ButtonControlContainer,
  WaterInfo,
  WaterInfoContainer,
  WaterTime,
} from './TodayWaterListItem.styled';
import Icon from 'components/common/Icon';
import { PropTypes } from 'prop-types';
import { color } from 'styles/colors';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';
import { useContext } from 'react';
import RemoveListItemModal from 'components/RemoveListItemModal/RemoveListItemModal';
import TodayListModal from 'components/TodayListModal/TodayListModal';

const TodayWaterListItem = ({ waterInfo }) => {
  
  const toggleModal = useContext(ModalContext);

  const handleClickEdit = id => {
    toggleModal(<TodayListModal type="edit" id={id} />);
  };

  const handleClickDelete = id => {
    toggleModal(<RemoveListItemModal id={id} />);
  };

  return (
    <>
      <WaterInfoContainer>
        <Icon name="glass" stroke={color.primary.blue} />
        <WaterInfo>{`${waterInfo.dosage}ml`}</WaterInfo>
        <WaterTime>{`${waterInfo.time}`}</WaterTime>
      </WaterInfoContainer>
      <ButtonControlContainer>
        <ButtonControl onClick={() => handleClickEdit(waterInfo._id)}>
          <Icon
            name="note"
            width="16px"
            height="16px"
            stroke={color.primary.blue}
          />
        </ButtonControl>
        <ButtonControl onClick={() => handleClickDelete(waterInfo._id)}>
          <Icon
            name="remove"
            width="16px"
            height="16px"
            stroke={color.secondary.tomato}
          />
        </ButtonControl>
      </ButtonControlContainer>
    </>
  );
};

export default TodayWaterListItem;

TodayWaterListItem.propTypes = {
  waterInfo: PropTypes.object,
};
