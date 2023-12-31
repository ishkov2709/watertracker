import styled from 'styled-components';
import { color } from 'styles/colors';

export const Item = styled.li`
  position: static;

  @media screen and (min-width: 768px) {
    position: relative;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background-color: ${color.primary.white};

  border: ${props =>
    props.isDone ? 'none' : `1px solid ${color.secondary.orange}`};

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
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 12px;
  }
`;
