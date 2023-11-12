import { useSelector } from 'react-redux';
import SigninPage from './SigninPage';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  return !isLoggedIn && !isRefreshing ? (
    <SigninPage to={redirectTo} />
  ) : (
    <Component />
  );
};

export default PrivateRoute;
