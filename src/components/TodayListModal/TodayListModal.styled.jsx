import styled from 'styled-components';
import { color } from 'styles/colors';

export const TodayModalListHeader = styled.p`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${color.primary.black};
`;
export const TodayModalListTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: ${color.primary.black};
`;

export const TodayModalListSubTitle = styled.p`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: ${color.primary.black};
`;

export const CommonContainer = styled.div`
  width: 544px;
  //height: 392px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WaterInfoContainer = styled.div`
width: 254px;
//height: 52px;
display flex;
padding: 8px 24px 8px 24px;
border-radius: 10px;
gap: 12px;
background-color: ${color.secondary.gray}
`;

export const WaterInfo = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${color.primary.blue};
`;
export const WaterTime = styled.p`
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: ${color.primary.black};
`;

export const AmountWaterContainer = styled.div`
width: 194px;
//height:44
display flex;
flex-direction: column;
gap: 12px;
`;

export const AmountWaterButtonContainer = styled.div`
width: 194px;
//height:44
display flex;
justify-content:center;
align-items: center;
padding: 8px 24px 8px 24px;
border-radius: 10px;
gap: 12px;
//background-color: ${color.secondary.gray}
`;

export const WaterValueContainer = styled.div`
  width: 92px;
  height: 36px;
  padding: 6px 10px 6px 10px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.secondary.gray};
`;

export const WaterValue = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${color.primary.blue};
`;

export const ButtonContainer = styled.button`
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 30px;
  border: 1px solid ${color.primary.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  //cursor: hand;
  background-color: transparent;
`;

export const SaveContainer = styled.div`
  //  width: 92px;
  //  height: 36px;
  // padding: 6px 10px 6px 10px;
  // border-radius: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;
  //background-color: ${color.secondary.gray}
`;
