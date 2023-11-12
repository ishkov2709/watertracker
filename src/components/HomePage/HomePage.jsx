import Container from 'components/common/Container';
import { Wrapper, Box, DailyNorma, WaterList } from './HomePage.styled';
import MonthStatsTable from './MonthStatsTable';
import DaysGeneralStats from './DaysGeneralStats';
import { useSelector } from 'react-redux';
import { dateCoodrsSelector } from 'store/waterData/selectors';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';

const HomePage = () => {
  const dateCoords = useSelector(dateCoodrsSelector);

  return (
    <Wrapper>
      <Container>
        <Box>
          <DailyNorma>
            <div>1.7</div>
            <form action="">
              <input type="range" />
              <button>add Water</button>
            </form>
          </DailyNorma>
          <WaterList>
            <ul>
              <li>awd123</li>
              <li>awd123</li>
              <li>awd123</li>
              <li>awd123</li>
            </ul>
            <MonthStatsTable />
            {dateCoords && <DaysGeneralStats dateCoords={dateCoords} />}
          </WaterList>
          <WaterRatioPanel />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
