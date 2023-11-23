import {
  Menu,
  MenuItem,
  SettingIcon,
  LogoutIcon,
} from './UserLogoModal.styled';
import { color } from 'styles/colors';
import { PropTypes } from 'prop-types';
import Icon from 'components/common/Icon';
import LogOut from 'components/Logout/LogOut';
import SettingsModal from 'components/SettingModal/SettingModal';

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

UserLogoModal.propTypes = {
  isMenuVisible: PropTypes.bool,
  toggleSettings: PropTypes.func,
  toggleLogout: PropTypes.func,
  isSettingsVisible: PropTypes.bool,
  isLogoutVisible: PropTypes.bool,
};
