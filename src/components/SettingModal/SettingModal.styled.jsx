import styled from 'styled-components';
import { color } from 'styles/colors';

export const UploadPhoto = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  margin-right: 8px;
`;
export const Eye = styled.span`
  position: absolute;
  right: 10px;
  top: 45%;
  transform: translateY(-45%);
  cursor: pointer;
`;

export const CloseIcon = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transform: rotate(45deg);
`;

export const ModalContainer = styled.div`
  background-color: #fff;

  border-radius: 10px;

  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 704px;
    height: 100%;
  }

  @media (min-width: 1440px) {
    width: 960px;
    height: 528px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: var(--primery-color-black, #2f2f2f);
  font-family: 'Roboto';
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const ModalBody = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 392px;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex: 1;
  }
  @media (min-width: 1440px) {
    &.password-fields {
      margin-bottom: 12px;
    }

    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: var(--primery-color-black, #2f2f2f);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;

  line-height: 20px;
`;

export const PhotoLabel = styled(Label)`
  display: block;
  font-weight: bold;
  text-align: center;
`;

export const Input = styled.input`
  color: var(--primery-color-blue, #407bff);
  &::placeholder {
    color: var(--primery-color-blue, #407bff);
  }
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;
export const PasswordInput = styled(Input)`
  color: ${color.primary.blue};
  &::placeholder {
    color: ${color.secondary.azure};
  }

  &:focus {
    outline: 1px solid ${color.primary.blue};
  }
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  position: relative;
  width: 256px;
  @media (min-width: 768px) {
    width: 392px;
  }
  @media (min-width: 1440px) {
    width: 392px;
  }
`;
export const PasswordInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (min-width: 1440px) {
    margin-bottom: 12px;
  }

  & svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > * {
    margin-right: 12px;
  }
`;

export const RadioOptionsContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  @media (min-width: 1440px) {
    margin-botton: 52px;
  }
`;
export const SubmitButton = styled.button`
  padding: 10px 24px;
  background-color: #407bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 256px;
  height: 36px;
  @media (min-width: 768px) {
    width: 160px;
    height: 44px;
    margin-left: 552px;
  }
  @media (min-width: 1440px) {
    width: auto;
    padding: 12px 64px;
    margin-left: 800px;
  }
`;

export const UserPhotoUpload = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 0;
  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
  & > label {
    color: var(--primery-color-blue, #407bff);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  & > img {
    width: 80px;
    height: 80px;

    border-radius: 80px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
`;
