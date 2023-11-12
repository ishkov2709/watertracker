import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser, signUpUser } from '../../store/auth/thunk';
import { tokenSelector } from '../../store/auth/selectors';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';

const SignupPage = () => {
  const isAuth = useSelector(tokenSelector);
  const navigate = useNavigate();

  const signup = body => {
    dispatch(signUpUser(body));
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   isAuth && navigate('/signin');
  // }, [isAuth, navigate]);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  return (
    <>
      <SignUp signup={signup} />
    </>
  );
};

export default SignupPage;
