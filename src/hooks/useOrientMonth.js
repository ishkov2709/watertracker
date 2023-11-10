const useOrientMonth = () => {
  const month = 0;
  let day = 32;
  let resultMonth = new Date(2023, month, day).getMonth();

  if (month === resultMonth) {
    console.log(day);
  }

  console.log(resultMonth > month);

  while (resultMonth > month) {
    day -= 1;

    const date = new Date(2023, month, day);

    resultMonth = date.getMonth();

    console.log(day);
  }
};
