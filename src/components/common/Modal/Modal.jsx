import { Backdrop, ModalContainer } from './Modal.styled';

const Modal = ({ type = 'default', children }) => {
  return (
    <Backdrop>
      <ModalContainer type={type}>{children}</ModalContainer>
    </Backdrop>
  );
};

export default Modal;
