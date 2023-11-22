import React from 'react';
import { useDispatch } from 'react-redux';
import { resendEmail, signUpUser } from '../../store/auth/thunk';

import SignUp from './SignUp';

const SignupPage = () => {
  const dispatch = useDispatch();

  const signup = body => {
    dispatch(signUpUser(body));
  };

  const resend = body => {
    dispatch(resendEmail(body));
  };

  return (
    <>
      <SignUp signup={signup} resend={resend} />
    </>
  );
};

export default SignupPage;
