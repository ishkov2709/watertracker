import { useSelector } from 'react-redux';
import HomePage from './HomePage';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  console.log(isLoggedIn);
  return isLoggedIn ? <HomePage /> : <Component to={redirectTo} />;
};

export default RestrictedRoute;
