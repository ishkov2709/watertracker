import { useDispatch, useSelector } from 'react-redux';
import Signin from './SignIn';
import { signInUser } from '../../store/auth/thunk';

const SigninPage = () => {
  const dispatch = useDispatch();

  const signin = body => {
    dispatch(signInUser(body));
  };

  return (
    <>
      <Signin signin={signin} />
    </>
  );
};

export default SigninPage;
