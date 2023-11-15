import styled from 'styled-components';
import { color } from 'styles/colors';

export const Wrapper = styled.div`
  position: absolute;
  top: -64px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 292px;
  height: 188px;

  padding: 24px 13px;

  background-color: ${color.primary.white};

  border-radius: 10px;

  box-shadow: 0 4px 4px 0 #407bff4d;

  @media screen and (min-width: 768px) {
    padding: 24px 16px;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
  }

  animation: 250ms ease-in-out smoothAppearance 1;
`;

export const DateMonthTitle = styled.p`
  color: ${color.primary.blue};
`;

export const MarkTitle = styled.p`
  color: ${color.primary.black};
`;

export const Mark = styled.span`
  color: ${color.primary.blue};

  font-weight: 500;
  font-size: 18px;
`;

export const Btn = styled.button`
  position: absolute;
  background: transparent;
  border: none;

  top: 21px;
  right: 13px;

  @media screen and (min-width: 768px) {
    right: 16px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }

  & .icon {
    transform: rotate(45deg);
  }
`;
