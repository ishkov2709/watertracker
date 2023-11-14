import React, { useState, useEffect, useCallback } from 'react';

import { Box } from 'components/common/Container/Container.styled';
import FormInput from 'components/common/FormInput/FormInput';
import Button from 'components/common/Button';
import Icon from 'components/common/Icon/Icon';

import {
  MyDailyNorma,
  MyDailyNormaParent,
  FrameGroup,
  FrameDiv,
  FrameParent1,
  ForGirlParent,
  ForManParent,
  ForGirl,
  ForMan,
  VIsTheVolumeOfTheWaterNWrapper,
  VIsTheContainer,
  Span,
  VIsThe1,
  CalculateYourRateParent,
  CalculateYourRate1,
  FrameParent2,
  GroupParent,
  ForGirl1,
  EllipseParent,
  FrameItem,
  ForMan1,
  YourWeightInKilogramsParent,
  YourWeightIn1,
  Wrapper,
  TheTimeOf1,
  TheRequiredAmount1,
  L,
  SaveWrapper,
  WriteDownHow1,
  Frame1,
  IconWrapper,
} from './DailyNormaModal.styled';

const DailyNormaModal = ({ setModalOpen }) => {
  const [weight, setWeight] = useState(0);
  const [activityTime, setActivityTime] = useState(0);
  const [calculatedWaterAmount, setCalculatedWaterAmount] = useState(0);
  const [drankWaterAmount, setDrankWaterAmount] = useState(0);

  const closeModal = () => {
    console.log('Closing modal');
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
      <MyDailyNormaParent>
        <MyDailyNorma>My daily norma</MyDailyNorma>
        <IconWrapper onClick={closeModal}>
          <Icon
            name="plus"
            width={24}
            height={24}
            fill="#ffffff00"
            stroke="#000000"
            className="icon"
          />
        </IconWrapper>
      </MyDailyNormaParent>
      <FrameGroup>
        <FrameDiv>
          <FrameParent1>
            <ForGirlParent>
              <ForGirl>For girl:</ForGirl>
              <calculation>V=(M*0,03) + (T*0,4)</calculation>
            </ForGirlParent>
            <ForManParent>
              <ForMan>For man:</ForMan>
              <calculation>V=(M*0,04) + (T*0,6)</calculation>
            </ForManParent>
          </FrameParent1>
          <VIsTheVolumeOfTheWaterNWrapper>
            <VIsTheContainer>
              <Span>*</Span>
              <VIsThe1>
                {' '}
                V is the volume of the water norm in liters per day, M is your
                body weight, T is the time of active sports, or another type of
                activity commensurate in terms of loads (in the absence of
                these, you must set 0)
              </VIsThe1>
            </VIsTheContainer>
          </VIsTheVolumeOfTheWaterNWrapper>
        </FrameDiv>
        <CalculateYourRateParent>
          <CalculateYourRate1>Calculate your rate:</CalculateYourRate1>
          <FrameParent2>
            <FrameParent1>
              <GroupParent>
                <FrameItem type="radio" />
                <ForGirl1>For girl</ForGirl1>
              </GroupParent>
              <EllipseParent>
                <FrameItem type="radio" />
                <ForMan1>For man</ForMan1>
              </EllipseParent>
            </FrameParent1>
            <YourWeightInKilogramsParent>
              <YourWeightIn1>Your weight in kilograms:</YourWeightIn1>
              <Wrapper>
                <FormInput
                  inputType="settings"
                  value={weight}
                  onChange={handleWeightChange}
                />
              </Wrapper>
            </YourWeightInKilogramsParent>
            <YourWeightInKilogramsParent>
              <TheTimeOf1>
                The time of active participation in sports or other activities
                with a high physical. load:
              </TheTimeOf1>
              <Wrapper>
                <FormInput
                  inputType="settings"
                  value={activityTime}
                  onChange={handleActivityTimeChange}
                />
              </Wrapper>
            </YourWeightInKilogramsParent>
            <EllipseParent>
              <TheRequiredAmount1>
                The required amount of water in liters per day:
              </TheRequiredAmount1>
              <L>{calculatedWaterAmount} L</L>
            </EllipseParent>
          </FrameParent2>
        </CalculateYourRateParent>
        <CalculateYourRateParent>
          <WriteDownHow1>
            Write down how much water you will drink:
          </WriteDownHow1>
          <Frame1>
            <Wrapper>
              <FormInput
                inputType="dailyNorma"
                value={drankWaterAmount}
                onChange={handleDrankWaterChange}
              />
            </Wrapper>
          </Frame1>
        </CalculateYourRateParent>
      </FrameGroup>
      <SaveWrapper>
        <Button onClick={handleSave}>Save</Button>
      </SaveWrapper>
    </Box>
  );
};

export default DailyNormaModal;
