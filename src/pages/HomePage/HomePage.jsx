import Container from 'components/common/Container';
import { Wrapper, Box, WaterList } from './HomePage.styled';
// DailyNorma,
import TodayWaterListItem from 'components/HomePage/TodayWaterListItem/TodayWaterListItem';
import MonthStatsTable from 'components/MonthStatsTable/';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import DailyNorma from 'components/HomePage/DailyNorma/DailyNorma';
import TodayWaterList from 'components/HomePage/TodayWaterList/TodayWaterList';

const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <DailyNorma>
            {/* <div>1.7</div>
            <form action="">
              <input type="range" />
              <button>add Water</button>
            </form> */}
          </DailyNorma>

          <WaterList>
            <TodayWaterList />
            {/* <ul>
              <TodayWaterListItem></TodayWaterListItem>
              <li>awd123</li>
              <li>awd123</li>
              <li>awd123</li>
              <li>awd123</li>
            </ul> */}
            <MonthStatsTable />
          </WaterList>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
