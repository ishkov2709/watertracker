import React from 'react';
import { Backdrop, ModalWrapper, CloseButton } from './logout.styled';

const LogOut = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <h2>Log out</h2>
        <p>Do you really want to leave?</p>
        <CloseButton onClick={onClose}>Cancel</CloseButton>
        <CloseButton onClick={onClose}>Log out</CloseButton>
      </ModalWrapper>
    </Backdrop>
  );
};

export default LogOut;
