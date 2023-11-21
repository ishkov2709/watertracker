import React from 'react';
import {
  ModalWrapper,
  Content,
  ButtonGroup,
  CancelButton,
  LogoutButton,
  CloseIcon,
  LogoutTitle,
  Question,
} from './LogOut.styled';
import { color } from 'styles/colors';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'store/auth/thunk';
import Icon from 'components/common/Icon';
import Modal from 'components/common/Modal';

const LogOut = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
    navigate('/');
  };
  return (
    <Modal type="logout" onClose={onClose}>
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={() => onClose()}>
          <Icon
            name="plus"
            stroke={color.primary.blue}
            width={32}
            height={32}
          />
        </CloseIcon>
        <Content>
          <LogoutTitle>Log out</LogoutTitle>
          <Question>Do you really want to leave?</Question>
        </Content>
        <ButtonGroup>
          <CancelButton onClick={() => onClose()}>Cancel</CancelButton>
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
        </ButtonGroup>
      </ModalWrapper>
    </Modal>
  );
};

export default LogOut;
