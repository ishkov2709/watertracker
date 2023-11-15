import React, { useState, useEffect, useCallback } from 'react';
import { Box } from 'components/common/Container/Container.styled';
import FormInput from 'components/common/FormInput/FormInput';
import Button from 'components/common/Button';
import Icon from 'components/common/Icon/Icon';
import * as Styled from './DailyNormaModal.styled';

const DailyNormaModal = ({ setModalOpen }) => {
  const [weight, setWeight] = useState(0);
  const [activityTime, setActivityTime] = useState(0);
  const [calculatedWaterAmount, setCalculatedWaterAmount] = useState(0);
  const [drankWaterAmount, setDrankWaterAmount] = useState(0);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSave = () => {
    console.log('Data to be sent:', {
      weight,
      activityTime,
      calculatedWaterAmount,
      drankWaterAmount,
    });

    const backendSuccess = true;

    if (backendSuccess) {
      closeModal();
    } else {
      console.error('Failed to save data. Please try again.');
    }
  };

  const handleWeightChange = event => {
    setWeight(event.target.value);
  };

  const handleActivityTimeChange = event => {
    setActivityTime(event.target.value);
  };

  const handleDrankWaterChange = event => {
    setDrankWaterAmount(event.target.value);
  };

  const calculateWaterAmount = useCallback(() => {
    const calculatedAmount = weight * 0.03 + activityTime * 0.4;
    setCalculatedWaterAmount(calculatedAmount.toFixed(2));
  }, [weight, activityTime]);

  useEffect(() => {
    calculateWaterAmount();
  }, [calculateWaterAmount]);

  useEffect(() => {
    setModalOpen(true);
  }, [setModalOpen]);

  return (
    <Box>
      <Styled.ModalHeader>
        {' '}
        My daily norma
        <Styled.CloseButton onClick={closeModal}>
          <Icon
            name="plus"
            width={24}
            height={24}
            fill="#ffffff00"
            stroke="#000000"
            className="icon"
          />
        </Styled.CloseButton>
      </Styled.ModalHeader>
      <Styled.DailyNormas>
        <>For girl:</>
        <Styled.ColorTextNormal>V=(M*0.03) + (T*0.4)</Styled.ColorTextNormal>
        <Styled.Forman>For man:</Styled.Forman>
        <Styled.ColorTextNormal>V=(M*0.04) + (T*0.6)</Styled.ColorTextNormal>
      </Styled.DailyNormas>
      <Styled.VolumeNorm>
        <Styled.TextNormal>
          *V is the volume of the water norm in liters per day, M is your body
          weight, T is the time of active sports, or another type of activity
          commensurate in terms of loads (in the absence of these, you must set
          0)
        </Styled.TextNormal>
      </Styled.VolumeNorm>
      <Styled.CalculateYourRate>Calculate your rate:</Styled.CalculateYourRate>
      <Styled.FrameParent>
        <Styled.FrameItem type="radio" id="forGirl" />
        <>For girl</>
        <Styled.FrameItem type="radio" id="forMan" />
        <>For man</>
      </Styled.FrameParent>
      <Styled.YourWeight>
        <>Your weight in kilograms:</>
        <FormInput
          inputType="settings"
          value={weight}
          onChange={handleWeightChange}
        />
      </Styled.YourWeight>
      <Styled.YourTime>
        <p>
          The time of active participation in sports or other activities with a
          high physical. load:
        </p>
        <FormInput
          inputType="settings"
          value={activityTime}
          onChange={handleActivityTimeChange}
        />
      </Styled.YourTime>

      <Styled.Required>
        <p>
          The required amount of water in liters per day:
          <Styled.L>{calculatedWaterAmount} L</Styled.L>
        </p>
      </Styled.Required>
      <Styled.Write>
        <p>Write down how much water you will drink:</p>
      </Styled.Write>
      <Styled.Frame>
        <FormInput
          inputType="dailyNorma"
          value={drankWaterAmount}
          onChange={handleDrankWaterChange}
        />
      </Styled.Frame>

      <Styled.SaveWrapper>
        <Button onClick={handleSave}>Save</Button>
      </Styled.SaveWrapper>
    </Box>
  );
};

export default DailyNormaModal;
