import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import WelcomePage from '../pages/WelcomePage';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'store/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './common/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<RestrictedRoute component={WelcomePage} />} />
        <Route path="Home" element={<PrivateRoute component={HomePage} />} />
        <Route
          path="signin"
          element={<RestrictedRoute component={SigninPage} />}
        />
        <Route
          path="signup"
          element={<RestrictedRoute component={SignUpPage} />}
        />
      </Route>
    </Routes>
  ) : (
    <Loader />
  );
};
