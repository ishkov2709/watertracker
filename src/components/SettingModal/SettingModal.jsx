import { useEffect, useState } from 'react';
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  FormRow,
  InputGroup,
  Label,
  Input,
  RadioGroup,
  SubmitButton,
  CloseIcon,
  Eye,
  UploadPhoto,
  UserPhotoUpload,
  RadioOptionsContainer,
  PasswordInput,
  PasswordInputContainer,
} from './SettingModal.styled';
import {
  errorSelector,
  successfulSelector,
  userSelector,
} from 'store/auth/selectors';
import { color } from 'styles/colors';
import { randomHexColor } from 'utils/randomHexColor';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { notifyError, notifySuccess } from 'utils/notify';
import { resetError, resetSuccessful } from 'store/auth/authSlice';
import { changeUserData, updateAvatar } from 'store/auth/thunk';
import Icon from 'components/common/Icon';
import Modal from 'components/common/Modal/Modal.jsx';
import 'react-toastify/dist/ReactToastify.css';

const passInitialState = {
  oldPassword: '',
  newPassword: '',
  repeatPassword: '',
};

const passConditionInitialState = {
  oldPass: false,
  newPass: false,
  repeatPass: false,
};

const SettingsModal = ({ onClose }) => {
  const error = useSelector(errorSelector);
  const successful = useSelector(successfulSelector);
  const userData = useSelector(userSelector);
  const [showPassword, setShowPassword] = useState({
    ...passConditionInitialState,
  });
  const [passFields, setPassFields] = useState({ ...passInitialState });
  const [user, setUser] = useState({ ...userData });
  const [isLoaded, setIsLoaded] = useState(false);

  const [randomColor] = useState(randomHexColor());
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (passFields.newPassword !== passFields.repeatPassword)
      return notifyError('Password mismatch');
    if (!user.username || !user.email)
      return notifyError('User or email is not filled in');
    const updatedData = {
      username: user.username,
      email: user.email,
      gender: user.gender,
      oldPassword: passFields.oldPassword,
      newPassword: passFields.newPassword,
      type: Object.values(passFields).some(el => el.length > 0)
        ? 'withPassword'
        : 'withoutPassword',
    };
    if (Object.values(passFields).every(el => el.length === 0)) {
      delete updatedData.oldPassword;
      delete updatedData.newPassword;
    }
    return dispatch(changeUserData(updatedData));
  };

  const handleKeydown = e => {
    if (e.code === 'Enter') handleSubmit();
  };

  const handleCloseClick = () => {
    onClose();
  };

  const handlePhotoChange = async e => {
    const formData = new FormData();
    if (e.target.files.length > 0) {
      formData.append('avatar', e.target.files[0]);
      dispatch(updateAvatar(formData));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  useEffect(() => {
    if (error) {
      notifyError('Required fields to change password are not filled in');
      dispatch(resetError());
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (successful) {
      notifySuccess('Changes made successfully!');
      dispatch(resetSuccessful());
      setPassFields({ ...passInitialState });
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  }, [successful, dispatch, onClose]);

  return (
    <>
      <Modal onClose={handleCloseClick} type="settings">
        <ModalContainer onClick={e => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>Setting</ModalTitle>
            <CloseIcon onClick={handleCloseClick}>
              <Icon
                name="plus"
                stroke={color.primary.blue}
                fill={color.primary.blue}
                width={32}
                height={32}
              />
            </CloseIcon>
          </ModalHeader>
          <ModalBody>
            <FormRow>
              <UserPhotoUpload>
                {userData?.avatarURL ? (
                  <img
                    src={userData.avatarURL}
                    style={{
                      background: isLoaded
                        ? 'transparent'
                        : color.secondary.azure,
                    }}
                    alt="User profile"
                    onLoad={() => setIsLoaded(true)}
                  />
                ) : (
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: randomColor,
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ fontSize: 28 }}>
                      {user.username.slice(0, 1).toUpperCase()}
                    </p>
                  </div>
                )}

                <UploadPhoto>
                  <Icon
                    name="upload"
                    stroke={color.primary.blue}
                    width={16}
                    height={16}
                  />
                </UploadPhoto>
                <label htmlFor="photo" style={{ cursor: 'pointer' }}>
                  Upload a photo
                </label>
                <input
                  type="file"
                  id="photo"
                  onChange={handlePhotoChange}
                  style={{ display: 'none' }}
                />
              </UserPhotoUpload>
            </FormRow>

            <FormRow>
              <InputGroup>
                <RadioGroup>
                  <Label>Your gender identity</Label>

                  <RadioOptionsContainer>
                    <Label htmlFor="gender_girl">
                      <Input
                        type="radio"
                        id="gender_girl"
                        name="gender"
                        value="girl"
                        checked={user.gender === 'female'}
                        onChange={() =>
                          setUser(prevState => ({
                            ...prevState,
                            gender: 'female',
                          }))
                        }
                      />{' '}
                      Girl
                    </Label>
                    <Label htmlFor="gender_man">
                      <Input
                        type="radio"
                        id="gender_man"
                        name="gender"
                        value="man"
                        checked={user.gender === 'male'}
                        onChange={() =>
                          setUser(prevState => ({
                            ...prevState,
                            gender: 'male',
                          }))
                        }
                      />{' '}
                      Man
                    </Label>
                  </RadioOptionsContainer>
                </RadioGroup>
                <Label htmlFor="name">Your name</Label>
                <PasswordInput
                  required
                  type="text"
                  id="name"
                  value={user.username}
                  onChange={e =>
                    setUser(prevState => ({
                      ...prevState,
                      username: e.target.value,
                    }))
                  }
                />
                <Label htmlFor="email">E-mail</Label>
                <PasswordInput
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={e =>
                    setUser(prevState => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </InputGroup>

              <InputGroup>
                <Label>Password</Label>
                <Label htmlFor="oldPassword">Outdated password</Label>
                <PasswordInputContainer>
                  <PasswordInput
                    type={showPassword.oldPass ? 'text' : 'password'}
                    placeholder="Password"
                    value={passFields.oldPassword}
                    onChange={({ target }) =>
                      setPassFields(prevState => ({
                        ...prevState,
                        oldPassword: target.value,
                      }))
                    }
                  />
                  <Eye
                    onClick={() =>
                      setShowPassword(prevState => ({
                        ...prevState,
                        oldPass: !prevState.oldPass,
                      }))
                    }
                  >
                    <Icon
                      name={showPassword.oldPass ? 'eye' : 'hidden'}
                      width={16}
                      height={16}
                      stroke={color.primary.blue}
                    />
                  </Eye>
                </PasswordInputContainer>
                <Label htmlFor="newPassword">New Password</Label>
                <PasswordInputContainer>
                  <PasswordInput
                    type={showPassword.newPass ? 'text' : 'password'}
                    placeholder="Password"
                    value={passFields.newPassword}
                    onChange={({ target }) =>
                      setPassFields(prevState => ({
                        ...prevState,
                        newPassword: target.value,
                      }))
                    }
                  />
                  <Eye
                    onClick={() =>
                      setShowPassword(prevState => ({
                        ...prevState,
                        newPass: !prevState.newPass,
                      }))
                    }
                  >
                    <Icon
                      name={showPassword.newPass ? 'eye' : 'hidden'}
                      width={16}
                      height={16}
                      stroke={color.primary.blue}
                    />
                  </Eye>
                </PasswordInputContainer>
                <Label htmlFor="repeatNewPassword">Repeat new password</Label>
                <PasswordInputContainer>
                  <PasswordInput
                    type={showPassword.repeatPass ? 'text' : 'password'}
                    placeholder="Password"
                    value={passFields.repeatPassword}
                    onChange={({ target }) =>
                      setPassFields(prevState => ({
                        ...prevState,
                        repeatPassword: target.value,
                      }))
                    }
                  />
                  <Eye
                    onClick={() =>
                      setShowPassword(prevState => ({
                        ...prevState,
                        repeatPass: !prevState.repeatPass,
                      }))
                    }
                  >
                    <Icon
                      name={showPassword.repeatPass ? 'eye' : 'hidden'}
                      width={16}
                      height={16}
                      stroke={color.primary.blue}
                    />
                  </Eye>
                </PasswordInputContainer>
              </InputGroup>
            </FormRow>

            <SubmitButton type="submit" onClick={handleSubmit}>
              Save
            </SubmitButton>
            <ToastContainer />
          </ModalBody>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default SettingsModal;
