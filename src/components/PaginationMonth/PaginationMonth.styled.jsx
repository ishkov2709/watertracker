import styled from 'styled-components';
import { color } from 'styles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Month = styled.p`
  width: 74px;
  text-align: center;
  font-size: 16px;

  color: ${color.primary.brue};
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  background: transparent;

  border: none;

  &:first-of-type .icon {
    transform: rotate(90deg);
  }

  &:last-of-type .icon {
    transform: rotate(270deg);
  }
`;
