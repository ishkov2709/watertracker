import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Circle, AvatarBtn, UserName, AvatarImg } from './Avatar.styled';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors.js';
import UserLogoModal from 'components/UserLogoModal';

const Avatar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const name = useSelector(state => state.auth.user.username);
  const avatar = useSelector(state => state.auth.user.avatarURL);
  const firstLetter = name.slice(0, 1);
  const index = name.indexOf('@');
  const emailName = name.slice(0, index);

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
    <AvatarBtn onClick={toggleMenu}>
      <UserLogoModal
        isMenuVisible={isMenuVisible}
        toggleSettings={toggleSettings}
        toggleLogout={toggleLogout}
        isSettingsVisible={isSettingsVisible}
        isLogoutVisible={isLogoutVisible}
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
