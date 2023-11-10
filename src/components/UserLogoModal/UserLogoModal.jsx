import React, { useState } from 'react';
import { MenuButton, Menu, MenuItem } from './UserLogoModal.styled';

const UserLogoModal = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <MenuButton onClick={toggleMenu}>User</MenuButton>
      {isVisible && (
        <Menu>
          <MenuItem>Setting</MenuItem>
          <MenuItem>Log out</MenuItem>
        </Menu>
      )}
    </div>
  );
};

export default UserLogoModal;
