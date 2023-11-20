import Modal from "components/common/Modal"
import Icon from "components/common/Icon"
import { color } from "styles/colors"
import {
    TodayModalListHeader, WaterInfoContainer, WaterInfo, WaterTime, TodayModalListTitle,
    AmountWaterButtonContainer, ButtonContainer, WaterValueContainer, WaterValue, SaveContainer,
    CommonContainer, TodayModalListSubTitle, AmountWaterContainer
} from "./TodayListModal.styled"
import FormInput from "components/common/FormInput"
import Button from "components/common/Button"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editWaterTodayById, saveWaterToday } from "store/waterData/thunk"
import {MONTH} from "../../constants/month"
//import { todayListModalClose } from "store/waterData/waterDataSlice"
import { useContext } from "react"
import { ModalContext } from "components/common/ModalProvider/ModalProvider"
import { dataTodaySelector } from "store/waterData/selectors"


const TodayListModal = ({ type = "save", id }) => {

    const dataToday = useSelector(dataTodaySelector)
    
    const [waterValue, setWaterValue] = useState(Number(0))
    const [timeValue, setTimeValue] = useState("00:00")

    useEffect(() => {
    if (type === "edit") {
        const waterRecord = dataToday.find((data) => data._id === id)
        setTimeValue(waterRecord.time);
        setWaterValue(waterRecord.dosage);
    }
    }, [dataToday,id,type])
    
    // const [timeValidate, setTimeValidate] = useState(false)

    const toggleModal = useContext(ModalContext);

    const dispatch = useDispatch();

    const handleDecremetWater = () => {setWaterValue(Number(waterValue)- 50)}
    const handleIncremetWater = () => {setWaterValue(Number(waterValue) + 50)}
    
    const handleBlurTimeInput = event => {
        const timeElement = document.querySelector("#waterTime")
        timeElement.innerHTML = timeValue
    }

     const handleBlurWaterInput = event => {
        setWaterValue(Number(event.currentTarget.value))
         //const waterElement = document.querySelector("#waterInfo")
         console.log(event);
         const waterElement = document.querySelectorAll('[water_attr="waterValue"]')
        waterElement.forEach(element => element.innerHTML = waterValue)
    }

    const handleChangeWaterInput = event => {
        // console.log(event.currentTarget.value);
        // event.currentTarget.value=''
         setWaterValue(event.currentTarget.value)
    }

    const handleChangeTimeInput = event => {
        setTimeValue(event.currentTarget.value)
    }

    const hadleClickSave = () => {
        const today = new Date()
        const data = {
            "dosage": waterValue,
            "time": timeValue,
            "day": today.getDate(),
            "month": MONTH[today.getMonth()],
            "year": today.getFullYear()
        }
        if (type === "edit") {
            dispatch(editWaterTodayById({id,data}))
        }
        else { 
            dispatch(saveWaterToday(data))
        }
        toggleModal();
    }
    
    return <Modal onClose={toggleModal}>
        <CommonContainer>
            <TodayModalListHeader>Edit the entered amount of water</TodayModalListHeader>
            <WaterInfoContainer>
                <Icon name="glass" stroke={color.primary.blue}/>
                <WaterInfo water_attr ="waterValue" id="waterInfo">{`${waterValue}ml`}</WaterInfo>
                <WaterTime id="waterTime">{`${timeValue}`}</WaterTime>
            </WaterInfoContainer>
            <TodayModalListTitle>Correct entered data:</TodayModalListTitle>
            <AmountWaterContainer>
                <TodayModalListSubTitle>Amount of water:</TodayModalListSubTitle>
                <AmountWaterButtonContainer>
                    <ButtonContainer onClick={handleDecremetWater}> 
                        <Icon name="minus" stroke={color.primary.blue} /> 
                    </ButtonContainer>
                    <WaterValueContainer>
                        <WaterValue water_attr ="waterValue">{`${waterValue}ml`}</WaterValue>
                    </WaterValueContainer>
                    <ButtonContainer onClick={handleIncremetWater}> 
                        <Icon name="plus" stroke={color.primary.blue}/>
                    </ButtonContainer>
                </AmountWaterButtonContainer>
            </AmountWaterContainer>
                <form onSubmit = {hadleClickSave}>
                <FormInput type="time"  onBlur={handleBlurTimeInput} onChange = {handleChangeTimeInput} inputType="addEdit" label="Recording time:" value={timeValue}></FormInput>
                <FormInput type="number" min="1" max="3000" onBlur={handleBlurWaterInput} onChange={handleChangeWaterInput} inputType="addEdit" label="Enter the value of the water used:" value={waterValue} ></FormInput>
                <SaveContainer >
                    <WaterValue water_attr='waterValue'>{`${waterValue}ml`}</WaterValue> 
                    {/* <Button width="160" type="submit">Save</Button> */}
                    <Button type='submit' width='160' >Save</Button>
                </SaveContainer>
                </form>
        </CommonContainer>
    </Modal>
}

export default TodayListModal