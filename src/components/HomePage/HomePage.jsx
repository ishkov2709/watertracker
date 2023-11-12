import MonthStatsTable from 'components/MonthStatsTable';

const HomePage = () => {
  const dateCoords = useSelector(dateCoodrsSelector);

  return (
    <div>
      <MonthStatsTable />
    </div>
  );
};

export default HomePage;
