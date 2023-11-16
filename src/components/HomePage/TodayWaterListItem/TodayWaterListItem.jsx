import {
  ButtonControl,
  ButtonControlContainer,
  TodayWaterListItemContainer,
  WaterInfo,
  WaterInfoContainer,
  WaterTime,
} from './TodayWaterListItem.styled';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors';

const handleClickEdit = id => {
  console.log(id);
};
const handleClickDelete = id => {
  console.log(id);
};
const TodayWaterListItem = ({ waterInfo }) => {
  // const  waterItem  = props
  // console.log("WaterInfo");
  // console.log(waterInfo);
  return (
    <TodayWaterListItemContainer>
      <WaterInfoContainer>
        <Icon name="glass" stroke={color.primary.blue} />
        <WaterInfo>{`${waterInfo.dosage}ml`}</WaterInfo>
        <WaterTime>{`${waterInfo.time}`}</WaterTime>
      </WaterInfoContainer>
      <ButtonControlContainer>
        <ButtonControl
          onClick={() => {
            handleClickEdit(waterInfo._id);
          }}
        >
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
    </TodayWaterListItemContainer>
  );
};

export default TodayWaterListItem;
