import styled, { css } from 'styled-components';

import { ReactComponent as ArrowIcon } from '../assets/solid.svg';
export const MenuButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  margin: 0;
  padding: 8px 16px;
  font-size: 16px;
  position: relative;
`;
export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
export const DropdownIcon = styled(ArrowIcon)`
  margin-left: 8px;
  transition: transform 0.3s ease;
  ${({ isMenuVisible }) =>
    isMenuVisible &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Menu = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 1000;
`;

export const MenuItem = styled.div`
  padding: 8px 16px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
