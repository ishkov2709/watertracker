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
  Img,
  FakeImg,
  FirstLetter,
} from './SettingModal.styled';
import { color } from 'styles/colors';
import { useAuth } from 'hooks/useAuth';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { randomHexColor } from 'utils/randomHexColor';
import { useEffect, useState } from 'react';
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

const SettingsModal = ({ onClose }) => {
  const { error, successful, user } = useAuth();
  const [showPassword, setShowPassword] = useState({
    oldPass: false,
    newPass: false,
    repeatPass: false,
  });
  const [passFields, setPassFields] = useState({ ...passInitialState });
  const [userNow, setUserNow] = useState({ ...user });
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (passFields.newPassword !== passFields.repeatPassword)
      return notifyError('Password mismatch');
    if (!userNow.username || !userNow.email)
      return notifyError('User or email is not filled in');
    const updatedData = {
      username: userNow.username,
      email: userNow.email,
      gender: userNow.gender,
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

  const handlePhotoChange = e => {
    const formData = new FormData();
    if (e.target.files.length > 0) {
      formData.append('avatar', e.target.files[0]);
      dispatch(updateAvatar(formData));
    }
  };

  const handleChangeInput = (nameField, callback) => {
    const interHandler = ({ target }) =>
      callback(prevState => ({
        ...prevState,
        [nameField]: target.value,
      }));
    return interHandler;
  };

  const toggleVisiblePass = nameField => {
    const interHandler = () =>
      setShowPassword(prevState => ({
        ...prevState,
        [nameField]: !prevState[nameField],
      }));
    return interHandler;
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
                {user?.avatarURL ? (
                  <Img
                    src={user.avatarURL}
                    alt="User profile"
                    isLoaded={isLoaded}
                    onLoad={() => setIsLoaded(true)}
                  />
                ) : (
                  <FakeImg randomColor={randomHexColor()}>
                    <FirstLetter>
                      {userNow.username.slice(0, 1).toUpperCase()}
                    </FirstLetter>
                  </FakeImg>
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
                        checked={userNow.gender === 'female'}
                        onChange={() =>
                          setUserNow(prevState => ({
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
                        checked={userNow.gender === 'male'}
                        onChange={() =>
                          setUserNow(prevState => ({
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
                  value={userNow.username}
                  onChange={handleChangeInput('username', setUserNow)}
                />
                <Label htmlFor="email">E-mail</Label>
                <PasswordInput
                  type="email"
                  id="email"
                  value={userNow.email}
                  onChange={handleChangeInput('email', setUserNow)}
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
                    onChange={handleChangeInput('oldPassword', setPassFields)}
                  />
                  <Eye onClick={toggleVisiblePass('oldPass')}>
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
                    onChange={handleChangeInput('newPassword', setPassFields)}
                  />
                  <Eye onClick={toggleVisiblePass('newPass')}>
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
                    onChange={handleChangeInput(
                      'repeatPassword',
                      setPassFields
                    )}
                  />
                  <Eye onClick={toggleVisiblePass('repeatPass')}>
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

SettingsModal.propTypes = {
  onClose: PropTypes.func,
};
