import styled, { css } from 'styled-components';

import { ReactComponent as ArrowIcon } from '../icons/solid.svg';
import { ReactComponent as SettingIconSvg } from '../icons/arrow-right-on-rectangle/setting.svg';
import { ReactComponent as LogOutIconSvg } from '../icons/cog-6-tooth/outline.svg';

export const SettingIcon = styled(SettingIconSvg)`
  width: 16px;
  height: 16px;
`;
export const LogOutIcon = styled(LogOutIconSvg)`
  width: 16px;
  heightl: 16px;
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
  width: 118px;
  z-index: 1000;
  padding: 16px;
  color: var(--primery-color-blue, #407bff);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  &:hover {
    background-color: #f2f2f2;
  }
`;
