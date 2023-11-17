import Container from 'components/common/Container';
import { Wrapper, Box, WaterList } from './HomePage.styled';
// DailyNorma,
//import TodayWaterListItem from './TodayWaterListItem';
import MonthStatsTable from 'components/MonthStatsTable';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import DaysGeneralStats from 'components/DaysGeneralStats';
import { useDispatch, useSelector } from 'react-redux';
import {
  dateCoodrsSelector,
  selectTodayListModalOpen,
  targetDaySelector,
} from 'store/waterData/selectors';
import DailyNorma from 'components/DailyNorma/DailyNorma';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import TodayListModal from 'components/TodayListModal/TodayListModal';
import { useEffect } from 'react';
import { getWaterToday } from 'store/waterData/thunk';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWaterToday());
  }, [dispatch]);

  //dispatch(getWaterToday())

  const targetDay = useSelector(targetDaySelector);
  const ListModalOpen = useSelector(selectTodayListModalOpen);

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

          {ListModalOpen && <TodayListModal></TodayListModal>}

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
            <WaterRatioPanel />
            {targetDay && <DaysGeneralStats targetDay={targetDay} />}
          </WaterList>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default HomePage;
