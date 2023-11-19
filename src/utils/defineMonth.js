import { format } from 'date-fns';

export const defineMonth = (year, month, day) => {
  return format(new Date(year, month, day), 'MMMM');
};
