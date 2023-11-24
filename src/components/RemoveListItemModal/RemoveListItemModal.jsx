import Modal from 'components/common/Modal';
import Button from 'components/common/Button';
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';
import { deleteWaterTodayById } from 'store/waterData/thunk';
import {
  DeleteModalBox,
  ButtonBox,
  DeleteModalTitle,
  DeleteModalDescription,
  TitleBox,
  ButtonPadding,
  ButtonMargin,
  CloseButton,
  BrSpan,
} from './RemoveListItemModal.styled';
import Icon from 'components/common/Icon';

const RemoveListItemModal = id => {
  const toggleModal = useContext(ModalContext);

  const dispatch = useDispatch();

  const onClickDeleteBtn = () => {
    dispatch(deleteWaterTodayById(id.id));
    toggleModal();
  };

  const onClickCloseBtn = () => {
    toggleModal();
  };

  return (
    <Modal onClose={toggleModal}>
      <DeleteModalBox>
        <TitleBox>
          <CloseButton onClick={onClickCloseBtn}>
            <Icon width="15px" height="15px" name="close" />
          </CloseButton>
          <DeleteModalTitle>Delete entry</DeleteModalTitle>
          <DeleteModalDescription>
            Are you sure you want to <BrSpan /> delete the entry?
          </DeleteModalDescription>
        </TitleBox>

        <ButtonBox>
          <Button
            buttonType="cancel"
            style={{ boxShadow: 'none' }}
            onClick={onClickCloseBtn}
          >
            <ButtonPadding>Cancel</ButtonPadding>
          </Button>
          <ButtonMargin>
            <Button buttonType="delete" onClick={onClickDeleteBtn}>
              <ButtonPadding>Delete</ButtonPadding>
            </Button>
          </ButtonMargin>
        </ButtonBox>
      </DeleteModalBox>
    </Modal>
  );
};

export default RemoveListItemModal;

RemoveListItemModal.propTypes = {
  id: PropTypes.string,
};
