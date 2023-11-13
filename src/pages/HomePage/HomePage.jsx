import Container from 'components/common/Container';
import { Wrapper, Box, DailyNorma, WaterList } from './HomePage.styled';
import MonthStatsTable from '../../components/MonthStatsTable';
import WaterRatioPanel from '../../components/WaterRatioPanel';
import DaysGeneralStats from '../../components/DaysGeneralStats';
import { useSelector } from 'react-redux';
import { dateCoodrsSelector } from 'store/waterData/selectors';

const HomePage = () => {
  const targetDay = useSelector(dateCoodrsSelector);

  return (
    <Wrapper>
      <Container>
        <Box>
          <DailyNorma>
            <div>1.7</div>

            <WaterRatioPanel />
          </DailyNorma>
          <WaterList>
            <ul>
              <li>awd123</li>
              <li>awd123</li>
              <li>awd123</li>
              <li>awd123</li>
            </ul>
            <MonthStatsTable />
            {targetDay && <DaysGeneralStats targetDay={targetDay} />}
          </WaterList>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
