import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'store/auth/thunk';
import { useDispatch } from 'react-redux';
import SharedLayout from './SharedLayout';
import WelcomePage from '../pages/WelcomePage';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import Loader from './common/Loader';
import ForgotPassPage from 'pages/ForgotPassPage/ForgotPassPage';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<WelcomePage />} redirectTo="/home" />
          }
        />
        <Route path="home" element={<PrivateRoute component={HomePage} />} />
        <Route
          path="signin"
          element={
            <RestrictedRoute component={<SigninPage />} redirectTo="/home" />
          }
        />
        <Route
          path="signup"
          element={
            <RestrictedRoute component={<SignUpPage />} redirectTo="/home" />
          }
        />
        <Route
          path="forgot-password"
          element={
            <RestrictedRoute
              component={<ForgotPassPage />}
              redirectTo="/signin"
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  ) : (
    <Loader />
  );
};
