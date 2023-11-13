import React, { useState } from 'react';
import { MenuButton, Menu, MenuItem } from './UserLogoModal.styled';
import SettingModal from 'components/SettingModal';

const UserLogoModal = () => {
  const [isSettingModalVisible, setIsSettingModalVisible] = useState(false);

  const toggleMenu = () => {
    setIsSettingModalVisible(!isSettingModalVisible);
  };

  return (
    <div>
      <MenuButton onClick={toggleMenu}>User</MenuButton>
      {isVisible && (
        <Menu>
          <MenuItem onClick={toggleMenu}>Setting</MenuItem>
          {isSettingModalVisible && <SettingModal onClose={toggleMenu} />}
          <MenuItem onClick={toggleMenu}>Log out</MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default UserLogoModal;
