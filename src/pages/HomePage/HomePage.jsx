import { defineMonth } from 'utils/defineMonth';
import { useDispatch } from 'react-redux';
import { useWaterData } from 'hooks/useWaterData';
import { getMonthDays, getWaterToday } from 'store/waterData/thunk';
import { createContext, useEffect, useState } from 'react';
import { Wrapper, Box, WaterList, DailyNormaBox } from './HomePage.styled';
import Container from 'components/common/Container';
import DailyNorma from 'components/DailyNorma/DailyNorma';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import TodayListModal from 'components/TodayListModal/TodayListModal';
import MonthStatsTable from 'components/MonthStatsTable';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import Loader from 'components/common/Loader';

const dateNow = new Date();

export const HomeContext = createContext();

const HomePage = () => {
  const { isLoading } = useWaterData();

  const [date, setDate] = useState({
    year: dateNow.getFullYear(),
    month: dateNow.getMonth(),
    day: dateNow.getDate(),
  });
  const [titleMonth, setTitleMonth] = useState(
    defineMonth(date.year, date.month, date.day)
  );
  const { isChangeNote, todayListModalOpen } = useWaterData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWaterToday());
  }, [dispatch]);

  useEffect(() => {
    if (isChangeNote) {
      const params = {
        year: date.year,
        month: defineMonth(date.year, date.month, date.day),
      };
      dispatch(getMonthDays(params));
    }
  }, [titleMonth, date, isChangeNote, dispatch]);

  return (
    <HomeContext.Provider value={{ date, setDate, titleMonth, setTitleMonth }}>
      <Wrapper>
        <Container>
          <Box>
            <DailyNormaBox>
              <DailyNorma />
              <WaterRatioPanel />
            </DailyNormaBox>

            {todayListModalOpen && <TodayListModal />}

            <WaterList>
              <TodayWaterList />
              <MonthStatsTable />
            </WaterList>
            {isLoading && <Loader />}
          </Box>
        </Container>
      </Wrapper>
    </HomeContext.Provider>
  );
};

export default HomePage;
