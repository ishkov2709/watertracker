import { useSelector } from 'react-redux';
import SigninPage from './SigninPage';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const isRefreshing = useSelector(state => state.user.isRefreshing);
  console.log(isLoggedIn);
  console.log(isRefreshing);

  return !isLoggedIn && !isRefreshing ? (
    <SigninPage to={redirectTo} />
  ) : (
    <Component />
  );
};

export default PrivateRoute;
