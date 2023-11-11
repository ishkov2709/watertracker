import { useDispatch, useSelector } from 'react-redux';
import Signin from './SignIn';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { refreshUser, signInUser } from '../../store/auth/thunk';
import { tokenSelector } from '../../store/auth/selectors';

const SigninPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(tokenSelector);
  const navigate = useNavigate();

  const signin = body => {
    dispatch(signInUser(body));
  };

  useEffect(() => {
    isAuth && navigate('/sighup');
  }, [isAuth, navigate]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Signin signin={signin} />
    </>
  );
};

export default SigninPage;
