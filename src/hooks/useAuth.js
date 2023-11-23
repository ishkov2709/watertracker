import { useSelector } from 'react-redux';
import {
  userSelector,
  authSelector,
  tokenSelector,
  errorSelector,
  isRefreshingSelector,
  isLoggedInSelector,
  successfulSelector,
  dailyNormaSelector,
} from 'store/auth/selectors';

export const useAuth = () => {
  const user = useSelector(userSelector);
  const auth = useSelector(authSelector);
  const token = useSelector(tokenSelector);
  const error = useSelector(errorSelector);
  const isRefreshing = useSelector(isRefreshingSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const successful = useSelector(successfulSelector);
  const dailyNorma = useSelector(dailyNormaSelector);

  return {
    user,
    auth,
    token,
    error,
    isRefreshing,
    isLoggedIn,
    successful,
    dailyNorma,
  };
};
