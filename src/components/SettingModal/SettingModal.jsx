import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  FormRow,
  InputGroup,
  Label,
  Input,
  RadioGroup,
  SubmitButton,
} from './SettingModal.styled';

import Modal from 'components/common/Modal/Modal.jsx';
const SettingsModal = ({ onClose }) => {
  const handleCloseClick = e => {
    e.preventDefault();
    onClose();
  };
  return (
    <Modal onClose={handleCloseClick} type="settings">
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Setting</ModalTitle>
          <CloseButton onClick={handleCloseClick}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <FormRow>
            <InputGroup>
              <Label htmlFor="photo">Your photo</Label>
              <Input type="file" id="photo" />
            </InputGroup>
          </FormRow>
          <FormRow>
            <RadioGroup>
              <Label>Your gender identity</Label>
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
                <Input type="radio" id="gender_man" name="gender" value="man" />{' '}
                Man
              </Label>
            </RadioGroup>
          </FormRow>

          <FormRow>
            <InputGroup>
              <Label htmlFor="name">Your name</Label>
              <Input type="text" id="name" defaultValue="David" />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" defaultValue="david01@gmail.com" />
            </InputGroup>
          </FormRow>
          <FormRow>
            <InputGroup>
              <Label htmlFor="oldPassword">Outdated password</Label>
              <Input type="password" id="oldPassword" />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="newPassword">New Password</Label>
              <Input type="password" id="newPassword" />
            </InputGroup>
          </FormRow>
          <FormRow>
            <InputGroup>
              <Label htmlFor="repeatNewPassword">Repeat new password</Label>
              <Input type="password" id="repeatNewPassword" />
            </InputGroup>
          </FormRow>
          <SubmitButton type="submit">Save</SubmitButton>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
};

export default SettingsModal;
