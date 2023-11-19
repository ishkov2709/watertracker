import {
  ButtonControl,
  ButtonControlContainer,
  TodayWaterListItemContainer,
  WaterInfo,
  WaterInfoContainer,
  WaterTime,
} from './TodayWaterListItem.styled';
import Icon from 'components/common/Icon';
import { useDispatch } from 'react-redux';
import { deleteWaterTodayById } from 'store/waterData/thunk';
import {
  swithChangeNote,
  todayListModalOpen,
} from 'store/waterData/waterDataSlice';
import { color } from 'styles/colors';

const TodayWaterListItem = ({ waterInfo }) => {
  function formatAMPM(date) {
    const time = date.split(':');
    const ampm = time[0] >= 12 ? 'PM' : 'AM';
    time[0] = time[0] % 12;
    time[0] = time[0] ? time[0] : 12;
    const strTime = time[0] + ':' + time[1] + ' ' + ampm;
    return strTime;
  }

  const dispatch = useDispatch();

  const handleClickEdit = id => {
    console.log(id);
    // dispatch(todayListModalOpen())
  };

  const handleClickDelete = id => {
    console.log(id);
    dispatch(deleteWaterTodayById(id));
    dispatch(swithChangeNote(true));
  };
  // const  waterItem  = props
  // console.log("WaterInfo");
  // console.log(waterInfo);
  return (
    <>
      <WaterInfoContainer>
        <Icon name="glass" stroke={color.primary.blue} />
        <WaterInfo>{`${waterInfo.dosage}ml`}</WaterInfo>
        <WaterTime>{`${formatAMPM(waterInfo.time)}`}</WaterTime>
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