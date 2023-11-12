import styled from 'styled-components';
import { color } from 'styles/colors';

export const Item = styled.li``;

export const Btn = styled.button`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-color: ${color.primary.white};

  border: none;

  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

export const CountDay = styled.p`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Percent = styled.p`
  color: ${color.secondary.azure};

  text-align: center;

  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`;
