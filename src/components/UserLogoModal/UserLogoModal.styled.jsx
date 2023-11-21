import styled from 'styled-components';

export const LogoutIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const SettingIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Menu = styled.div`
  position: absolute;
  display: flex;
  gap: 16px;
  background-color: white;
  box-shadow: 0px 4px 14px 0 #407bff4d;
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
  border-radius: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f2f2f24d;
  }

  cursor: pointer;
`;
