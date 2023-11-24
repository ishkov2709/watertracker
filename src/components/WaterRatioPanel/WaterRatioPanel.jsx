import { useEffect } from 'react';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors';
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
import { useSelector } from "react-redux";
import { selectTotalTodayDailyWater } from "store/waterData/selectors";
import TodayListModal from "components/TodayListModal/TodayListModal";
import { ModalContext } from "components/common/ModalProvider/ModalProvider";
import { useContext } from "react";
import { useWaterData } from 'hooks/useWaterData';

const WaterRatioPanel = () => {
  
  const toggleModal = useContext(ModalContext);

  //const rangeWaterPercentage = useSelector(selectTotalTodayDailyWater);
  
  const {totalTodayDailyWater} = useWaterData()
  
  const handleClickAdd = () => {
     toggleModal(<TodayListModal/>)
    }

  useEffect(() => {
    const ele = document.querySelector('#mark');
    if (ele) {
      let newVal = Number(((totalTodayDailyWater - 0) * 100) / (100 - 0));
      newVal = newVal >= 100 ? 100 : newVal;
      ele.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
  }, [totalTodayDailyWater]);

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${totalTodayDailyWater}%`
    };
  };

  return (
    <WaterRatioPanelContainer>
      <WaterRangeContainer>
        <WaterRangeHeader>Today</WaterRangeHeader>
        <WaterRange
            type="range"
            maxValue={100}
            minValue={0}
            value={totalTodayDailyWater}
            readOnly={true}
            style={getBackgroundSize()}
        />
        <MarksContainer>
          <LeftMark>0%</LeftMark>
          <Mark id="mark">{`${
            totalTodayDailyWater > 100 ? 100 : totalTodayDailyWater
          }%`}</Mark>
          <RightMark>100%</RightMark>
        </MarksContainer>
      </WaterRangeContainer>
      <AddWaterButton onClick={handleClickAdd}>
        <Icon name="add" stroke={color.primary.white} /> Add Water
      </AddWaterButton>
    </WaterRatioPanelContainer>
  );
};

export default WaterRatioPanel;
