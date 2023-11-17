import styled from 'styled-components';
import { color } from 'styles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MonthAndYear = styled.p`
  width: 120px;
  text-align: center;
  font-size: 16px;

  color: ${color.primary.blue};
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  background: transparent;

  border: none;

  transition: transform 250ms ease-in-out;

  &:first-of-type .icon {
    transform: rotate(90deg);
  }

  &:last-of-type .icon {
    transform: rotate(270deg);
  }

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;
