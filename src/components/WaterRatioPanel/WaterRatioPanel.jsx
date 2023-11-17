import { useEffect } from "react"
import Icon from "components/common/Icon"
import { color } from "styles/colors"
import {
  WaterRatioPanelContainer,
  WaterRangeHeader,
  WaterRangeContainer,
  WaterRange,
  MarksContainer,
  LeftMark,
  RightMark,
  Mark,
  AddWaterButton,
} from './WaterRatioPanel.styled';
import { useDispatch, useSelector } from "react-redux";
import { selectTotalTodayDailyWater } from "store/waterData/selectors";
import { todayListModalOpen } from "store/waterData/waterDataSlice";

const WaterRatioPanel = () => {
  //const [rangeWaterPercentage, setRangeWaterPercentage] = useState([30]);
  const rangeWaterPercentage = useSelector(selectTotalTodayDailyWater);
  const dispatch = useDispatch();
  
 const handleClickAdd = () => {
        // console.log(id);
         dispatch(todayListModalOpen())
    }

  useEffect(() => {
    const ele = document.querySelector('#mark');
    if (ele) {
      let newVal = Number(((rangeWaterPercentage - 0) * 100) / (100 - 0));
      newVal = (newVal >= 100) ? 100 : newVal;
      ele.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
      
    }
  }, [rangeWaterPercentage]);

  return (
    <WaterRatioPanelContainer>
      <WaterRangeContainer>
        <WaterRangeHeader>Today</WaterRangeHeader>
        <WaterRange
            type="range"
            maxValue={100}
            minValue={0}
            value={rangeWaterPercentage}
            readOnly={true}
                // onChange={(event) => {
                //     // console.log(event.target);
                //     setRangeWaterPercentage(event.currentTarget.value)
                // }}
        />
        <MarksContainer>
          <LeftMark>0%</LeftMark>
          <Mark id="mark">{`${rangeWaterPercentage}%`}</Mark>
          <RightMark>100%</RightMark>
        </MarksContainer>
      </WaterRangeContainer>
      <AddWaterButton onClick={handleClickAdd}>
        <Icon name="add" stroke={color.primary.white} /> Add Water
      </AddWaterButton >
    </WaterRatioPanelContainer>
  );
};

export default WaterRatioPanel;
