import MonthStatsTable from 'components/MonthStatsTable';
import Container from 'components/Container';
import { Wrapper, Box, DailyNorma, WaterList, Calendar} from './HomePage.styled';

const HomePage = () => {
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
            </WaterList>
          </Box>
        </Container> 
      </Wrapper>

  );
};

export default HomePage;
