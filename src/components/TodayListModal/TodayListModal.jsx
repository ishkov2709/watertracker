import { color } from 'styles/colors';
import {
  TodayModalListHeader,
  WaterInfoContainer,
  WaterInfo,
  WaterTime,
  TodayModalListTitle,
  AmountWaterButtonContainer,
  ButtonContainer,
  WaterValueContainer,
  WaterValue,
  SaveContainer,
  CommonContainer,
  TodayModalListSubTitle,
  AmountWaterContainer,
  CloseButton,
} from './TodayListModal.styled';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editWaterTodayById, saveWaterToday } from 'store/waterData/thunk';
import { MONTH } from '../../constants/month';
//import { todayListModalClose } from "store/waterData/waterDataSlice"
import { useContext } from 'react';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';
import { dataTodaySelector } from 'store/waterData/selectors';
import Icon from 'components/common/Icon';
import Modal from 'components/common/Modal';
import Button from 'components/common/Button';
import FormInput from 'components/common/FormInput';

const TodayListModal = ({ type = 'save', id }) => {
  const dispatch = useDispatch();

  const dataToday = useSelector(dataTodaySelector);

  const [waterValue, setWaterValue] = useState(() => {
    if (dataToday.length === 0) {
      return Number(0);
    }
    const lastAddWaterDosageIndex = dataToday.length - 1;
    return dataToday[lastAddWaterDosageIndex].dosage;
  });
  const [timeValue, setTimeValue] = useState(() => {
    const dateNow = new Date();
    let hours = dateNow.getHours().toString();
    let minutes = dateNow.getMinutes().toString();
    if (hours.length === 1) {
      hours = '0' + hours;
    }
    if (minutes.length === 1) {
      minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
  });
  // console.log(timeValue);

  useEffect(() => {
    if (type === 'edit') {
      const waterRecord = dataToday.find(data => data._id === id);
      setTimeValue(waterRecord.time);
      setWaterValue(waterRecord.dosage);
    }
  }, [dataToday, id, type]);

  const toggleModal = useContext(ModalContext);

  const handleDecremetWater = () => {
    setWaterValue(waterValue - 50);
  };
  const handleIncremetWater = () => {
    setWaterValue(waterValue + 50);
  };

  // const handleDecremetWater = () => {setWaterValue(Number(waterValue)- 50)}
  // const handleIncremetWater = () => {setWaterValue(Number(waterValue) + 50)}

  const handleBlurTimeInput = event => {
    const timeElement = document.querySelectorAll('[water_attr="timeValue"]');
    timeElement.forEach(element => (element.innerHTML = timeValue));
  };

  const handleBlurWaterInput = event => {
    setWaterValue(Number(event.currentTarget.value));
    const waterElement = document.querySelectorAll('[water_attr="waterValue"]');
    waterElement.forEach(element => (element.innerHTML = waterValue));
  };

  const handleChangeWaterInput = event => {
    setWaterValue(event.currentTarget.value);
  };

  const handleChangeTimeInput = event => {
    setTimeValue(event.currentTarget.value);
  };

  const hadleClickSave = () => {
    const today = new Date();
    const data = {
      dosage: waterValue,
      time: timeValue,
      day: today.getDate(),
      month: MONTH[today.getMonth()],
      year: today.getFullYear(),
    };
    if (type === 'edit') {
      dispatch(editWaterTodayById({ id, data }));
    } else {
      dispatch(saveWaterToday(data));
    }
    toggleModal();
  };

  const onClickCloseBtn = () => {
    toggleModal();
  };

  return (
    <Modal onClose={toggleModal}>
      <CommonContainer>
        {/* <CloseButton onClick={onClickCloseBtn}>
          <Icon width="12" height="12" name="close" />
        </CloseButton> */}
        {type === 'edit' ? (
          <TodayModalListHeader>
            Edit the entered amount of water
            <CloseButton onClick={onClickCloseBtn}>
              <Icon width="12" height="12" name="close" />
            </CloseButton>
          </TodayModalListHeader>
        ) : (
          <TodayModalListHeader>
            Add of water
            <CloseButton onClick={onClickCloseBtn}>
              <Icon width="12" height="12" name="close" />
            </CloseButton>
          </TodayModalListHeader>
        )}
        {type === 'edit' && (
          <WaterInfoContainer>
            <Icon name="glass" stroke={color.primary.blue} />
            <WaterInfo
              water_attr="waterValue"
              id="waterInfo"
            >{`${waterValue}ml`}</WaterInfo>
            <WaterTime
              water_attr="timeValue"
              id="waterTime"
            >{`${timeValue}`}</WaterTime>
          </WaterInfoContainer>
        )}
        {type === 'edit' ? (
          <TodayModalListTitle>Correct entered data:</TodayModalListTitle>
        ) : (
          <TodayModalListTitle>Chose a value:</TodayModalListTitle>
        )}
        <AmountWaterContainer>
          <TodayModalListSubTitle>Amount of water:</TodayModalListSubTitle>
          <AmountWaterButtonContainer>
            <ButtonContainer onClick={handleDecremetWater}>
              <Icon name="minus" stroke={color.primary.blue} />
            </ButtonContainer>
            <WaterValueContainer>
              <WaterValue water_attr="waterValue">{`${waterValue}ml`}</WaterValue>
            </WaterValueContainer>
            <ButtonContainer onClick={handleIncremetWater}>
              <Icon name="plus" stroke={color.primary.blue} />
            </ButtonContainer>
          </AmountWaterButtonContainer>
        </AmountWaterContainer>
        <FormInput
          type="time"
          onBlur={handleBlurTimeInput}
          onChange={handleChangeTimeInput}
          inputType="addEdit"
          label="Recording time:"
          value={timeValue}
        ></FormInput>
        <FormInput
          type="number"
          min="1"
          max="3000"
          onBlur={handleBlurWaterInput}
          onChange={handleChangeWaterInput}
          inputType="addEdit"
          label="Enter the value of the water used:"
          value={waterValue}
        ></FormInput>
        <SaveContainer>
          <WaterValue water_attr="waterValue">{`${waterValue}ml`}</WaterValue>
          <Button onClick={hadleClickSave} width="160">
            Save
          </Button>
        </SaveContainer>
      </CommonContainer>
    </Modal>
  );
};

export default TodayListModal;

TodayListModal.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
};
