import React from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../store/auth/thunk';

import SignUp from './SignUp';

const SignupPage = () => {
  const dispatch = useDispatch();

  const signup = body => {
    dispatch(signUpUser(body));
  };

  return (
    <>
      <SignUp signup={signup} />
    </>
  );
};

export default SignupPage;
