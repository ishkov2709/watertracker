import styled from 'styled-components';
import { ReactComponent as CloseIconSvg } from '../icons/outline.svg';

export const CloseIcon = styled(CloseIconSvg)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  background: white;
  position: relative;
  padding: 32px 24px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    max-width: 592px;

    justify-content: space-between;
  }
`;

export const Content = styled.div`
  h2 {
    margin-bottom: 24px;
    color: #333;
  }

  p {
    margin-bottom: 24px;
    color: #666;
  }

  @media (min-width: 768px) {
    h2,
    p {
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

export const CancelButton = styled(Button)`
  background: var(--secondary-color-5, #d7e3ff);
  color: var(--primary-color-blue, #407bff);

  &:hover {
    background: darken(var(--secondary-color-5, #d7e3ff), 10%);
  }
`;

export const LogoutButton = styled(Button)`
  background: #ff5f5f;
  color: white;

  &:hover {
    background: #ff4c4c;
  }
`;
