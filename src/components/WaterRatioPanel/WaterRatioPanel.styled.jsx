import styled from 'styled-components';
import { color } from '../../styles/colors';

export const WaterRatioPanelContainer = styled.div`
    width: 280px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;

    @media screen and (min-width: 768px) {
    width: 704px;
    gap: 24px;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    gap: 32px;
  }
`;

export const WaterRange = styled.input`
  &[type='range'] {
    //  overflow: hidden;
    -webkit-appearance: none;
    margin: 5px 0;
    width: 100%;
    border-radius: 10px;
    background-color: ${color.secondary.azure};
    background-image: linear-gradient(${color.primary.blue},${color.primary.blue});
    background-repeat: no-repeat;
  }

  &[type='range']:focus {
    outline: none;
  }

  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    animate: 0.2s;
    border-radius: 10px;
     -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &[type='range']::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${color.primary.white};
    border: solid 1px ${color.primary.blue};
    // box-shadow: -80px 0 4px 0px rgba(0,0,0, 1);
    -webkit-appearance: none;
    margin-top: -4px;
  }

  &[type=range]:focus::-webkit-slider-runnable-track {
    //background: #000;
   }
`;

export const WaterRangeHeader = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: ${color.primary.blue};
`;
export const WaterRangeContainer = styled.div`
  position: relative;
  //width: 391px;
  height: 102px;   
  display: flex;
  flex-direction: column;
  //gap: 10px;

    @media screen and (min-width: 768px) {
      width:356px;
      height: 90px; 
  }

  @media screen and (min-width: 1440px) {
 
  }
`;

export const MarksContainer = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Mark = styled.span`
  position: absolute;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${color.primary.blue};

  &::before {
    color: ${color.secondary.azure};
    content: '|';
    justify-content: center;
    align-items: center;
  }
`;

export const LeftMark = styled.span`
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: ${color.primary.blue};

  &::before {
  color: ${color.secondary.azure};
  display: flex;
  gap:4px
  flex-direction: column;
  content: '|';
  justify-content: center;
  align-items: center;

}`;

export const RightMark = styled.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${color.primary.blue};

  &::before {
    color: ${color.secondary.azure};
    display: flex;
    flex-direction: column;
    content: '|';
    justify-content: center;
    align-items: center;
  }
`;

export const AddWaterButton = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding 6px 76px 6px 76px;
  background-color: ${color.primary.blue};
  color: ${color.primary.white};
  border: none;

     @media screen and (min-width: 768px) {
    width:336px;
    padding 10px 104px 10px 104px;
  }

  @media screen and (min-width: 1440px) {
  width: 178px;
  height: 44px;
  padding: 10px 30px 10px 30px;
  }
`;
