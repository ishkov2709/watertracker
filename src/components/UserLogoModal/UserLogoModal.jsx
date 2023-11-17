import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  DropdownIcon,
  SettingIcon,
  LogOutIcon,
} from './UserLogoModal.styled';
import SettingsModal from 'components/SettingModal/SettingModal';
import LogOut from 'components/Logout/LogOut';
import Avatar from 'components/Avatar';

const UserLogoModal = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

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
      <Avatar onClick={toggleMenu} />
      <DropdownIcon isMenuVisible={isMenuVisible} onClick={toggleMenu} />{' '}
      {isMenuVisible && (
        <Menu>
          <MenuItem onClick={toggleSettings}>
            <SettingIcon />
            Setting
          </MenuItem>
          <MenuItem onClick={toggleLogout}>
            <LogOutIcon />
            Log out
          </MenuItem>
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
