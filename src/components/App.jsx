import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import WelcomePage from './WelcomePage/WelcomePage';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import RestrictedRoute from './RestrictedRoute';
import SigninPage from './SigninPage';
import SignUpPage from './SignUpPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomePage />} />
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
  );
};
