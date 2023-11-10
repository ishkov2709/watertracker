import styled from 'styled-components';

export const MenuButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  margin: 0;
  padding: 8px 16px;
  font-size: 16px;
  position: relative;
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
