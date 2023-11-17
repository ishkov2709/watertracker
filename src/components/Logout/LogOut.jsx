import React from 'react';
import {
  Backdrop,
  ModalWrapper,
  Content,
  ButtonGroup,
  CancelButton,
  LogoutButton,
  CloseIcon,
} from './LogOut.styled';

const LogOut = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={onClose} />
        <Content>
          <h2>Log out</h2>
          <p>Do you really want to leave?</p>
        </Content>
        <ButtonGroup>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <LogoutButton onClick={onClose}>Log out</LogoutButton>
        </ButtonGroup>
      </ModalWrapper>
    </Backdrop>
  );
};

export default LogOut;
