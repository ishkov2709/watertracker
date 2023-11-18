import styled from 'styled-components';

export const LogoutIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const SettingIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const DropdownIcon = styled.svg`
  margin-left: 8px;
  transition: transform 0.3s ease;
  ${({ isMenuVisible }) => isMenuVisible && `transform: rotate(180deg);`}
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
