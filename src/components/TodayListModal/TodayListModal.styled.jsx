import styled from 'styled-components';
import { color } from 'styles/colors';

export const TodayModalListHeader = styled.p`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${color.primary.black};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TodayModalListTitle = styled.p`
  width: 256px;
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
  position: relative;
  width: 256px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const WaterInfoContainer = styled.div`
  width: 254px;
  display: flex;
  padding: 8px 24px 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${color.secondary.gray};
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
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AmountWaterButtonContainer = styled.div`
  width: 194px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px 8px 24px;
  border-radius: 10px;
  gap: 12px;
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
  width: 92px;
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
  background-color: transparent;
`;

export const SaveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
