import { useSelector } from 'react-redux';
import {
  DailyNormaButton,
  DailyNormaContainer,
  DailyNormaContainerWaterStat,
  DailyNormaHeader,
  DailyNormaWaterNorma,
} from './DailyNorma.styled';
import { selectDailyNorma } from 'store/waterData/selectors';

const DailyNorma = () => {
  const dailyNorma = useSelector(selectDailyNorma);

  return (
    <DailyNormaContainer>
      <DailyNormaHeader>My daily norma</DailyNormaHeader>
      <DailyNormaContainerWaterStat>
        <DailyNormaWaterNorma>{`${dailyNorma}L`}</DailyNormaWaterNorma>
        <DailyNormaButton>Edit</DailyNormaButton>
      </DailyNormaContainerWaterStat>
    </DailyNormaContainer>
  );
};

export default DailyNorma;
