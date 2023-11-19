import Modal from "components/common/Modal"
import Button from "components/common/Button"
import { useDispatch } from "react-redux"
import { useContext } from "react"
import { ModalContext } from "components/common/ModalProvider/ModalProvider"
import { deleteWaterTodayById } from "store/waterData/thunk"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { dataTodaySelector } from "store/waterData/selectors"
import { DeleteModalBox, ButtonBox, DeleteModalTitle, DeleteModalDescription, TitleBox, ButtonPadding, ButtonMargin } from "./RemoveListItemModal.styled"





const RemoveListItemModal = (id) => {
    const WaterItem = useSelector(dataTodaySelector)
    const toggleModal = useContext(ModalContext);

    const dispatch = useDispatch();

    const onClickDeleteBtn = () => {
        dispatch(deleteWaterTodayById(id.id))
        toggleModal()   
    }

    const onClickCancelBtn = () => {
        toggleModal()
    }
    
    return <Modal onClose={toggleModal}>
                    <DeleteModalBox>

                        <TitleBox>
                            <DeleteModalTitle>Delete entry</DeleteModalTitle>
                            <DeleteModalDescription>Are you sure you want to delete the entry?</DeleteModalDescription>
                        </TitleBox>
                    
                        <ButtonBox>
                            <Button buttonType="cancel" onClick={onClickCancelBtn}><ButtonPadding>Cancel</ButtonPadding></Button> 
                            <ButtonMargin><Button buttonType="delete" onClick={onClickDeleteBtn}><ButtonPadding>Delete</ButtonPadding></Button></ButtonMargin>
                        </ButtonBox>
                    </DeleteModalBox>
            </Modal>
}

export default RemoveListItemModal