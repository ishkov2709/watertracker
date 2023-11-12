import { useEffect, useState } from 'react';
import Icon from 'components/common/Icon';
import { color } from '../../styles/colors';
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

const WaterRatioPanel = () => {
  const [rangeWaterPercentage, setRangeWaterPercentage] = useState([30]);

  useEffect(() => {
    const ele = document.querySelector('#mark');
    // console.log(ele);
    if (ele) {
      const newVal = Number(((rangeWaterPercentage - 0) * 100) / (100 - 0));
      ele.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
      // console.log(ele.style.left);
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
          onChange={event => {
            console.log(event.target);
            setRangeWaterPercentage(event.currentTarget.value);
          }}
        />
        <MarksContainer>
          <LeftMark>0%</LeftMark>
          <Mark id="mark">{`${rangeWaterPercentage}%`}</Mark>
          <RightMark>100%</RightMark>
        </MarksContainer>
      </WaterRangeContainer>
      <AddWaterButton>
        {' '}
        <Icon name="add" stroke={color.primary.white} /> Add Water
      </AddWaterButton>
    </WaterRatioPanelContainer>
  );
};

export default WaterRatioPanel;
