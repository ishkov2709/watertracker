import { useSelector } from 'react-redux';
import {
  DailyNormaButton,
  DailyNormaContainer,
  DailyNormaContainerWaterStat,
  DailyNormaHeader,
  DailyNormaWaterNorma,
} from './DailyNorma.styled';
import { selectDailyNorma } from 'store/waterData/selectors';
import { ModalContext } from 'components/common/ModalProvider/ModalProvider';
import { useContext } from 'react';
import DailyNormaModal from 'components/DailyNormaModal/DailyNormaModal';

const DailyNorma = () => {
  const toggleModal = useContext(ModalContext);

  const dailyNorma = useSelector(selectDailyNorma);

  const openDailyNormaModal = () => {
    toggleModal(<DailyNormaModal />);
  };

  return (
    <DailyNormaContainer>
      <DailyNormaHeader>My daily norma</DailyNormaHeader>
      <DailyNormaContainerWaterStat>
        <DailyNormaWaterNorma>{`${dailyNorma}L`}</DailyNormaWaterNorma>
        <DailyNormaButton onClick={openDailyNormaModal}>Edit</DailyNormaButton>
      </DailyNormaContainerWaterStat>
    </DailyNormaContainer>
  );
};

export default DailyNorma;
