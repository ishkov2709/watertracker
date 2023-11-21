import Container from 'components/common/Container';
import { Wrapper, Box, WaterList, DailyNormaBox } from './HomePage.styled';
// DailyNorma,
//import TodayWaterListItem from './TodayWaterListItem';
import MonthStatsTable from 'components/MonthStatsTable';
import WaterRatioPanel from 'components/WaterRatioPanel/WaterRatioPanel';
import DaysGeneralStats from 'components/MonthStatsTable/DayItemCalendar/DaysGeneralStats';
import { useDispatch, useSelector } from 'react-redux';
import {
  isChangeNoteSelector,
  selectTodayListModalOpen,
  targetDaySelector,
} from 'store/waterData/selectors';
import DailyNorma from 'components/DailyNorma/DailyNorma';
import TodayWaterList from 'components/TodayWaterList/TodayWaterList';
import TodayListModal from 'components/TodayListModal/TodayListModal';
import { createContext, useEffect, useState } from 'react';
import { getMonthDays, getWaterToday } from 'store/waterData/thunk';
import { defineMonth } from 'utils/defineMonth';

const dateNow = new Date();

export const HomeContext = createContext();

const HomePage = () => {
  const [date, setDate] = useState({
    year: dateNow.getFullYear(),
    month: dateNow.getMonth(),
    day: dateNow.getDate(),
  });
  const [titleMonth, setTitleMonth] = useState(
    defineMonth(date.year, date.month, date.day)
  );
  const dispatch = useDispatch();
  const isChangeNote = useSelector(isChangeNoteSelector);

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

  const targetDay = useSelector(targetDaySelector);
  const ListModalOpen = useSelector(selectTodayListModalOpen);

  return (
    <HomeContext.Provider value={{ date, setDate, titleMonth, setTitleMonth }}>
      <Wrapper>
        <Container>
          <Box>
            <DailyNormaBox>
              <DailyNorma>
              {/* <div>1.7</div>
              <form action="">
                <input type="range" />
                <button>add Water</button>
              </form>
                */}
            </DailyNorma>
              <WaterRatioPanel />
            </DailyNormaBox>
          
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
             
              {targetDay && <DaysGeneralStats targetDay={targetDay} />}
            </WaterList>
          </Box>
        </Container>
      </Wrapper>
    </HomeContext.Provider>
  );
};

export default HomePage;
