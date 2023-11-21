import {
  Menu,
  MenuItem,
  SettingIcon,
  LogoutIcon,
} from './UserLogoModal.styled';
import SettingsModal from 'components/SettingModal/SettingModal';
import LogOut from 'components/Logout/LogOut';

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
              <use href="#Setting" />
            </SettingIcon>
            Setting
          </MenuItem>
          <MenuItem onClick={toggleLogout}>
            <LogoutIcon>
              <use href="#Logout" />
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
