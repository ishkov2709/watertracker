import { useSelector } from 'react-redux';
import HomePage from '../pages/HomePage';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <HomePage /> : <Component to={redirectTo} />;
};

export default RestrictedRoute;
