import styled from 'styled-components';

export const LogoutIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const SettingIcon = styled.svg`
  width: 16px;
  height: 16px;
`;

export const Menu = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 118px;
  height: 88px;
  z-index: 1000;
  padding: 16px;
  color: var(--primery-color-blue, #407bff);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  top: 100%;
  right: 0px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f2f2f2;
  }
`;
