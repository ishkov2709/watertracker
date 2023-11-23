import React, { useContext, useState } from 'react';
import { color } from 'styles/colors.js';
import { useAuth } from 'hooks/useAuth';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';
import { Circle, AvatarBtn, UserName, AvatarImg } from './Avatar.styled';
import Icon from 'components/common/Icon';
import LogOut from 'components/Logout/LogOut';
import SettingModal from 'components/SettingModal';
import UserLogoModal from 'components/UserLogoModal';

const Avatar = () => {
  const toggleModal = useContext(ModalContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { user: { username, avatarURL} } = useAuth();
  const firstLetter = username.slice(0, 1);
  const index = username.indexOf('@');
  const emailName = username.slice(0, index);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const toggleSettings = () => {
    toggleModal(<SettingModal onClose={() => toggleModal()} />);
    setIsMenuVisible(false);
  };

  const toggleLogout = () => {
    toggleModal(<LogOut onClose={() => toggleModal()} />);
    setIsMenuVisible(false);
  };

  return (
    <AvatarBtn onClick={toggleMenu}>
      <UserLogoModal
        isMenuVisible={isMenuVisible}
        toggleSettings={toggleSettings}
        toggleLogout={toggleLogout}
      />
      {username.includes('@') ? (
        <UserName>{emailName}</UserName>
      ) : (
        <UserName>{username}</UserName>
      )}
      <Circle>
        {avatarURL ? (
          <AvatarImg src={avatarURL} alt="logo" />
        ) : (
          <p>{firstLetter.toUpperCase()}</p>
        )}
      </Circle>
      <Icon
        name="arrow-down"
        fill={color.primary.blue}
        stroke={color.primary.blue}
        width={16}
        height={16}
      />
    </AvatarBtn>
  );
};

export default Avatar;
