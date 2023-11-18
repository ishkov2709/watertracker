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
  ItemeGender,
  TiltleGender,
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

const DailyNormaModal = ({ setModalOpen }) => {
  const [calculatedWaterAmount, setCalculatedWaterAmount] = useState(0);
  const [isLoader, setIsLoader] = useState(false);
  const [isSendFormDane, setIsSendFormDane] = useState(false);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  const calculateWaterAmount = useCallback(values => {
    const weightCoefficient = values.gender === 'forGirl' ? 0.03 : 0.04;
    const timeCoefficient = values.gender === 'forGirl' ? 0.4 : 0.6;
    const calculatedAmount =
      values.weight * weightCoefficient + values.activityTime * timeCoefficient;
    setCalculatedWaterAmount(calculatedAmount.toFixed(2));
  }, []);

  const formik = useFormik({
    initialValues: {
      gender: 'forGirl',
      weight: 0,
      activityTime: 0,
      drankWaterAmount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      setIsLoader(true);

      setTimeout(() => {
        setIsLoader(false);
        setIsSendFormDane(true);
      }, 2000);

      const backendSuccess = true;
      if (backendSuccess) {
        formik.resetForm();
      } else {
        console.error('Failed to save data. Please try again.');
      }
    },
  });

  useEffect(() => {
    calculateWaterAmount(formik.values);
  }, [calculateWaterAmount, formik.values]);

  useEffect(() => {
    if (isSendFormDane) {
      setTimeout(() => {
        closeModal();
      }, 2000);
    }
  }, [isSendFormDane, closeModal]);

  return (
    <Modal onClose={closeModal}>
      <ModalBox>
        {!isSendFormDane && (
          <>
            <ModalHeader>
              My daily norma
              <CloseButton onClick={closeModal}>
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
            <TiltleGender>
              <ItemeGender>
                For girl:
                <ColorTextNormal> V=(M*0.03) + (T*0.4)</ColorTextNormal>
              </ItemeGender>
              <ItemeGender>
                For man:
                <ColorTextNormal> V=(M*0.04) + (T*0.6)</ColorTextNormal>
              </ItemeGender>
            </TiltleGender>
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
                checked={formik.values.gender === 'forGirl'}
                onChange={() => formik.setFieldValue('gender', 'forGirl')}
              />
              <>For girl</>
              <FrameItem
                type="radio"
                id="forMan"
                name="gender"
                checked={formik.values.gender === 'forMan'}
                onChange={() => formik.setFieldValue('gender', 'forMan')}
              />
              <>For man</>
            </FrameParent>
            <YourWeight>
              <>Your weight in kilograms:</>
            </YourWeight>
            <FormInput
              inputType="dailyNorma"
              value={formik.values.weight}
              onChange={e => {
                formik.handleChange(e);
                const inputText = e.target.value;
                let numericValue = parseFloat(inputText);
                if (isNaN(numericValue)) {
                  numericValue = 0;
                }
                formik.setFieldValue('weight', numericValue);
              }}
              onBlur={formik.handleBlur}
              name="weight"
              error={formik.touched.weight && formik.errors.weight}
            />
            <YourTime>
              <>
                The time of active participation in sports or other activities
                with a high physical load:
              </>
            </YourTime>
            <FormInput
              inputType="dailyNorma"
              value={formik.values.activityTime}
              onChange={e => {
                formik.handleChange(e);
                const inputText = e.target.value;
                let numericValue = parseFloat(inputText);
                if (isNaN(numericValue)) {
                  numericValue = 0;
                }
                formik.setFieldValue('activityTime', numericValue);
              }}
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
              onChange={e => {
                formik.handleChange(e);
                const inputText = e.target.value;
                let numericValue = parseFloat(inputText);
                if (isNaN(numericValue)) {
                  numericValue = 0;
                }
                formik.setFieldValue('drankWaterAmount', numericValue);
              }}
              onBlur={formik.handleBlur}
              name="drankWaterAmount"
              error={
                formik.touched.drankWaterAmount &&
                formik.errors.drankWaterAmount
              }
            />
            <SaveWrapper>
              <Button type="submit" onClick={formik.handleSubmit}>
                Save
              </Button>
            </SaveWrapper>
          </>
        )}

        {isLoader && <Loader />}
        {isSendFormDane && <div>Form sent successfully</div>}
      </ModalBox>
    </Modal>
  );
};

export default DailyNormaModal;
