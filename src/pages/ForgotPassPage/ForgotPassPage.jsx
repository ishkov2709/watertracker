import { useDispatch } from 'react-redux';
//import { signInUser } from '../../store/auth/thunk';
import ForgotPass from './ForgotPass';

const ForgotPassPage = () => {
  const dispatch = useDispatch();

  //   const signin = body => {
  //     dispatch(signInUser(body));
  //   };

  return (
    <>
      <ForgotPass />
    </>
  );
};

export default ForgotPassPage;
