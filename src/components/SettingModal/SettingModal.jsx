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
} from './SettingModal.styled';

import Modal from 'components/common/Modal/Modal.jsx';
const SettingsModal = ({ onClose }) => {
  const [userPhoto, setUserPhoto] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleCloseClick = e => {
    e.preventDefault();
    onClose();
  };

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setUserPhoto('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal onClose={handleCloseClick} type="settings">
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Setting</ModalTitle>
          <CloseIcon onClick={handleCloseClick}>
            &times;
            <use href="#logout-outline" />
          </CloseIcon>
        </ModalHeader>
        <ModalBody>
          <FormRow>
            <UserPhotoUpload>
              <img
                src={userPhoto || 'path_to_default_image.png'}
                alt="User profile"
              />
              <UploadPhoto>
                <use href="#Upload-photo" />
              </UploadPhoto>
              <Label htmlFor="photo">Upload photo</Label>
              <input
                type="file"
                id="photo"
                onChange={handlePhotoChange}
                style={{ display: 'none' }}
              />
            </UserPhotoUpload>
          </FormRow>
          <FormRow>
            <RadioGroup>
              <Label>Your gender identity</Label>
              <RadioOptionsContainer>
                <Label htmlFor="gender_girl">
                  <Input
                    type="radio"
                    id="gender_girl"
                    name="gender"
                    value="girl"
                  />{' '}
                  Girl
                </Label>
                <Label htmlFor="gender_man">
                  <Input
                    type="radio"
                    id="gender_man"
                    name="gender"
                    value="man"
                  />{' '}
                  Man
                </Label>
              </RadioOptionsContainer>
            </RadioGroup>
          </FormRow>

          <FormRow>
            <InputGroup>
              <Label htmlFor="name">Your name</Label>
              <PasswordInput type="text" id="name" defaultValue="David" />
              <Label htmlFor="email">E-mail</Label>
              <PasswordInput
                type="email"
                id="email"
                defaultValue="david01@gmail.com"
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="oldPassword">Outdated password</Label>
              <PasswordInputContainer>
                <PasswordInput
                  type={showPassword ? 'text' : 'password'}
                  id="oldPassword"
                  defaultValue="Password"
                />
                <Eye onClick={togglePasswordVisibility}>
                  <use href="#eye" />
                </Eye>
              </PasswordInputContainer>
              <Label htmlFor="newPassword">New Password</Label>
              <PasswordInputContainer>
                <PasswordInput
                  type={showPassword ? 'text' : 'password'}
                  id="oldPassword"
                  defaultValue="Password"
                />
                <Eye onClick={togglePasswordVisibility}>
                  <use href="#eye" />
                </Eye>
              </PasswordInputContainer>
              <Label htmlFor="repeatNewPassword">Repeat new password</Label>
              <PasswordInputContainer>
                <PasswordInput
                  type={showPassword ? 'text' : 'password'}
                  id="oldPassword"
                  defaultValue="Password"
                />
                <Eye onClick={togglePasswordVisibility}>
                  <use href="#eye" />
                </Eye>
              </PasswordInputContainer>
            </InputGroup>
          </FormRow>

          <SubmitButton type="submit">Save</SubmitButton>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
};

export default SettingsModal;
