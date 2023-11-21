import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Circle, AvatarBtn, UserName, AvatarImg } from './Avatar.styled';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors.js';
import UserLogoModal from 'components/UserLogoModal';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';
import SettingModal from 'components/SettingModal';
import LogOut from 'components/Logout/LogOut';

const Avatar = () => {
  const toggleModal = useContext(ModalContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const name = useSelector(state => state.auth.user.username);
  const avatar = useSelector(state => state.auth.user.avatarURL);
  const firstLetter = name.slice(0, 1);
  const index = name.indexOf('@');
  const emailName = name.slice(0, index);

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
      {name.includes('@') ? (
        <UserName>{emailName}</UserName>
      ) : (
        <UserName>{name}</UserName>
      )}
      <Circle>
        {avatar ? (
          <AvatarImg src={avatar} alt="logo" />
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
