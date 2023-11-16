import styled from 'styled-components';
import { color } from 'styles/colors';

export const CalendarBox = styled.div`
  width: 264px;
  height: 474px;

  background-color: ${color.secondary.white};

  @media screen and (min-width: 768px) {
    width: 646px;
    height: 318px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }
`;

export const HeadBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const TitleBox = styled.b`
  font-weight: 500;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 26px;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    column-gap: 34px;
    row-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }

  animation: 250ms ease-in-out smoothAppearance;
`;
