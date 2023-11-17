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
import { useState } from "react"
import { useDispatch } from "react-redux"
import { saveWaterToday } from "store/waterData/thunk"
import {MONTH} from "../../constants/month"
import { todayListModalClose } from "store/waterData/waterDataSlice"





const TodayListModal = () => {
    const [waterValue, setWaterValue] = useState(250)
    const [timeValue, setTimeValue] = useState("00:00")

    const dispatch = useDispatch();

    const handleDecremetWater = () => {setWaterValue(waterValue - 50)}
    const handleIncremetWater = () => {setWaterValue(waterValue + 50)}
    
    const handleBlurTimeInput = event => {
        const timeElement = document.querySelector("#waterTime")
        timeElement.innerHTML = event.currentTarget.value
    }
     const handleBlurWaterInput = event => {
         // console.log(event.currentTarget.value);
         setWaterValue(Number(event.currentTarget.value))
        const timeElement = document.querySelector("#waterInfo")
        timeElement.innerHTML = event.currentTarget.value
    }

    const handleChangeWaterInput = event => {
        setWaterValue(Number(event.currentTarget.value))
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
       // console.log(data);
        dispatch(saveWaterToday(data))
        dispatch(todayListModalClose())
    }
    
    return <Modal>
        <TodayModalListHeader>Edit the entered amount of water</TodayModalListHeader>
        <CommonContainer>
        <WaterInfoContainer>
            <Icon name="glass" stroke={color.primary.blue}/>
            <WaterInfo id="waterInfo">{`${waterValue}ml`}</WaterInfo>
            <WaterTime id="waterTime">{`00:00`}</WaterTime>
        </WaterInfoContainer>
        <TodayModalListTitle>Correct entered data:</TodayModalListTitle>
     
            <AmountWaterContainer>
                   <TodayModalListSubTitle>Amount of water:</TodayModalListSubTitle>
        <AmountWaterButtonContainer>
            <ButtonContainer onClick={handleDecremetWater}> <Icon name="minus" stroke={color.primary.blue} /> </ButtonContainer>
            <WaterValueContainer><WaterValue>{`${waterValue}ml`}</WaterValue></WaterValueContainer>
            <ButtonContainer onClick={handleIncremetWater}> <Icon name="plus" stroke={color.primary.blue}/> </ButtonContainer>
        </AmountWaterButtonContainer>
        </AmountWaterContainer>
        {/* <p>Recording time:</p> */}
            <FormInput onBlur={handleBlurTimeInput} onChange = {handleChangeTimeInput} inputType="addEdit" label="Recording time:" value={timeValue}></FormInput>
            <FormInput onBlur={handleBlurWaterInput} onChange = {handleChangeWaterInput} inputType="addEdit" label="Enter the value of the water used:" value={waterValue}></FormInput>
        <SaveContainer >
            <WaterValue>{`${waterValue}ml`}</WaterValue> 
            <Button width='160' onClick = {hadleClickSave}>Save</Button>
            </SaveContainer>
        </CommonContainer>
    </Modal>
}

export default TodayListModal