import { useSelector } from 'react-redux';
import {
  dataTodaySelector,
  selectTotalTodayDailyWater,
  selectIsLoading,
  targetDaySelector,
  daysOfMonthSelector,
  isChangeNoteSelector,
} from 'store/waterData/selectors';

export const useWaterData = () => {
  const dataToday = useSelector(dataTodaySelector);
  const totalTodayDailyWater = useSelector(selectTotalTodayDailyWater);
  const isLoading = useSelector(selectIsLoading);
  const targetDay = useSelector(targetDaySelector);
  const daysOfTheMonth = useSelector(daysOfMonthSelector);
  const isChangeNote = useSelector(isChangeNoteSelector);
  const daysOfMonth = useSelector(daysOfMonthSelector);

  return {
    dataToday,
    totalTodayDailyWater,
    isLoading,
    targetDay,
    daysOfTheMonth,
    isChangeNote,
    daysOfMonth,
  };
};
