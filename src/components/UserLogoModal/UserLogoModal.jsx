import {
  Menu,
  MenuItem,
  SettingIcon,
  LogoutIcon,
} from './UserLogoModal.styled';
import SettingsModal from 'components/SettingModal/SettingModal';
import LogOut from 'components/Logout/LogOut';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors';

const UserLogoModal = ({
  isMenuVisible,
  toggleSettings,
  toggleLogout,
  isSettingsVisible,
  isLogoutVisible,
}) => {
  return (
    <div>
      {isMenuVisible && (
        <Menu>
          <MenuItem onClick={toggleSettings}>
            <SettingIcon>
              <Icon
                name="settings"
                width={16}
                height={16}
                stroke={color.primary.blue}
              />
            </SettingIcon>
            Setting
          </MenuItem>
          <MenuItem onClick={toggleLogout}>
            <LogoutIcon>
              <Icon
                name="logout"
                width={16}
                height={19}
                stroke={color.primary.blue}
              />
            </LogoutIcon>
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
