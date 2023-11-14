import React, { useState } from 'react';
import {
  MenuButton,
  Menu,
  MenuItem,
  UserPhoto,
  DropdownIcon,
} from './UserLogoModal.styled';
import SettingsModal from '../setting/Settig';
import LogOut from '../logout/logout';

const UserLogoModal = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const userPhotoURL = '';
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const toggleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
    setIsMenuVisible(false);
  };

  const toggleLogout = () => {
    setIsLogoutVisible(!isLogoutVisible);
    setIsMenuVisible(false);
  };

  return (
    <div>
      <MenuButton onClick={toggleMenu}>
        <UserPhoto src={userPhotoURL} alt="User" />
        User
        <DropdownIcon isMenuVisible={isMenuVisible} />{' '}
      </MenuButton>
      {isMenuVisible && (
        <Menu>
          <MenuItem onClick={toggleSettings}>Setting</MenuItem>
          <MenuItem onClick={toggleLogout}>Log out</MenuItem>
        </Menu>
      )}
      {isSettingsVisible && <SettingsModal onClose={toggleSettings} />}
      {isLogoutVisible && (
        <LogOut isOpen={isLogoutVisible} onClose={toggleLogout} />
      )}
    </div>
  );
};
export default UserLogoModal;
