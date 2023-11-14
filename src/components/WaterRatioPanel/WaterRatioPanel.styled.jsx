import styled from 'styled-components';
import { color } from 'styles/colors';

export const WaterRatioPanelContainer = styled.div`
width: 592px;
// border: black solid 1px;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
gap: 16px;
`

export const WaterRange = styled.input`

&[type=range] {
    //  overflow: hidden;
  -webkit-appearance: none;
  margin: 5px 0;
  width: 100%;
}

&[type=range]:focus {
  outline: none;
}

&[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  animate: 0.2s;
  background: ${color.secondary.azure};
  border-radius: 10px;
}

&[type=range]::-webkit-slider-thumb {
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: ${color.primary.white};
  border: solid 1px ${color.primary.blue}; 
    // box-shadow: -80px 0 4px 0px rgba(0,0,0, 1);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4px;
}

// &[type=range]:focus::-webkit-slider-runnable-track {
//   background: #000;
// }

`

export const WaterRangeHeader = styled.p`
font-family: Roboto;
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: ${color.primary.blue};
`
export const WaterRangeContainer = styled.div`
  position: relative;
  width: 391px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const MarksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

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
}`

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

}`

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
`

export const AddWaterButton = styled.button`
display: flex;
gap: 10px;
justify-content: center;
align-items: center;
width: 178px;
height: 44px;
padding: 10px 30px 10px 30px;
border-radius: 10px;
background-color: ${color.primary.blue};
color: ${color.primary.white};
border: none;`