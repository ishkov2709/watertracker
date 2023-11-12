import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ type = 'default', onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  const closeModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={closeModal}>
      <ModalContainer type={type}>{children}</ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
