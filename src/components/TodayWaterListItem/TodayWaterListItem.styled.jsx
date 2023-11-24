import styled from 'styled-components';
import { color } from 'styles/colors';

export const WaterInfoContainer = styled.div`
  width: 166px;
  height: 26px;
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 36px;
  }

  @media screen and (min-width: 1440px) {
  }
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

export const ButtonControlContainer = styled.div`
  width: 50px;
  height: 16px;
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const ButtonControl = styled.button`
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
`;
