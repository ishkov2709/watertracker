import React, { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import validationSchema from 'schemas/validationSchema';
import FormInput from 'components/common/FormInput/FormInput';
import Button from 'components/common/Button';
import Icon from 'components/common/Icon/Icon';
import Modal from 'components/common/Modal';
import Loader from 'components/common/Loader';
import {
  ModalBox,
  ModalHeader,
  CloseButton,
  ColorTextNormal,
  ItemsGender,
  TitleGender,
  VolumeNorm,
  TextNormal,
  CalculateYourRate,
  FrameParent,
  FrameItem,
  YourWeight,
  YourTime,
  Required,
  L,
  Write,
  SaveWrapper,
} from './DailyNormaModal.styled';
import { useContext } from 'react';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';
import { useDispatch } from 'react-redux';
import { updateDailyNorma } from 'store/auth/thunk';

const DailyNormaModal = ({ setModalOpen }) => {
  const toggleModal = useContext(ModalContext);
  const dispatch = useDispatch();

  const [calculatedWaterAmount, setCalculatedWaterAmount] = useState(0);
  const [isLoader, setIsLoader] = useState(false);
  const [isSendFormDane, setIsSendFormDane] = useState(false);

  // const closeModal = useCallback(() => {
  //   setModalOpen(false);
  // }, [setModalOpen]);

  const calculateWaterAmount = useCallback(values => {
    const weightCoefficient = values.gender === 'female' ? 0.03 : 0.04;
    const timeCoefficient = values.gender === 'female' ? 0.4 : 0.6;
    const calculatedAmount =
      values.weight * weightCoefficient + values.activityTime * timeCoefficient;
    setCalculatedWaterAmount(calculatedAmount.toFixed(2));
  }, []);

  const handleInputChange = (e, fieldName) => {
    formik.handleChange(e);
    const inputText = e.target.value;
    let numericValue = parseFloat(inputText);
    if (isNaN(numericValue)) {
      numericValue = 0;
    }
    formik.setFieldValue(fieldName, numericValue);
  };

  const handleSubmit = async () => {
    setIsLoader(true);

    // Отримання даних форми
    const values = formik.values;

    // Відправка даних на бекенд
    dispatch(updateDailyNorma(values));

    formik.resetForm();
    toggleModal();

    setIsLoader(false);
  };

  const formik = useFormik({
    initialValues: {
      gender: 'female',
      weight: 0,
      activityTime: 0,
      drankWaterAmount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    calculateWaterAmount(formik.values);
  }, [calculateWaterAmount, formik.values]);

  return (
    <Modal onClose={toggleModal}>
      <ModalBox>
        {!isSendFormDane && (
          <>
            <ModalHeader>
              My daily norma
              <CloseButton onClick={toggleModal}>
                <Icon
                  name="plus"
                  width={24}
                  height={24}
                  fill="#ffffff00"
                  stroke="#000000"
                  className="icon"
                />
              </CloseButton>
            </ModalHeader>
            <TitleGender>
              <ItemsGender>
                For girl:
                <ColorTextNormal> V=(M*0.03) + (T*0.4)</ColorTextNormal>
              </ItemsGender>
              <ItemsGender>
                For man:
                <ColorTextNormal> V=(M*0.04) + (T*0.6)</ColorTextNormal>
              </ItemsGender>
            </TitleGender>
            <VolumeNorm>
              <TextNormal>
                *V is the volume of the water norm in liters per day, M is your
                body weight, T is the time of active sports, or another type of
                activity commensurate in terms of loads (in the absence of
                these, you must set 0)
              </TextNormal>
            </VolumeNorm>
            <CalculateYourRate>Calculate your rate:</CalculateYourRate>
            <FrameParent>
              <FrameItem
                type="radio"
                id="forGirl"
                name="gender"
                checked={formik.values.gender === 'female'}
                onChange={() => formik.setFieldValue('gender', 'female')}
              />
              <label htmlFor="forGirl">For girl</label>
              <FrameItem
                type="radio"
                id="forMan"
                name="gender"
                checked={formik.values.gender === 'male'}
                onChange={() => formik.setFieldValue('gender', 'male')}
              />
              <label htmlFor="forMan">For man</label>
            </FrameParent>
            <YourWeight>
              <>Enter your weight in kilograms:</>
            </YourWeight>
            <FormInput
              inputType="dailyNorma"
              value={formik.values.weight}
              onChange={e => handleInputChange(e, 'weight')}
              onBlur={formik.handleBlur}
              name="weight"
              error={formik.touched.weight && formik.errors.weight}
            />
            <YourTime>
              <>
                Enter the time of active participation in sports or other
                activities with a high physical load:
              </>
            </YourTime>
            <FormInput
              inputType="dailyNorma"
              value={formik.values.activityTime}
              onChange={e => handleInputChange(e, 'activityTime')}
              onBlur={formik.handleBlur}
              name="activityTime"
              error={formik.touched.activityTime && formik.errors.activityTime}
            />
            <Required>
              <>The required amount of water in liters per day:</>
              <L>
                {isNaN(calculatedWaterAmount)
                  ? 'Invalid'
                  : `${calculatedWaterAmount} L`}
              </L>
            </Required>
            <Write>
              <>Write down how much water you will drink:</>
            </Write>
            <FormInput
              inputType="dailyNorma"
              value={formik.values.drankWaterAmount}
              onChange={e => handleInputChange(e, 'drankWaterAmount')}
              onBlur={formik.handleBlur}
              name="drankWaterAmount"
              error={
                formik.touched.drankWaterAmount &&
                formik.errors.drankWaterAmount
              }
            />
            <SaveWrapper>
              <Button type="submit" onClick={handleSubmit}>
                Save
              </Button>
            </SaveWrapper>
          </>
        )}

        {isLoader && <Loader />}
        {/* {isSendFormDane && <div>Form sent successfully</div>} */}
      </ModalBox>
    </Modal>
  );
};

export default DailyNormaModal;
