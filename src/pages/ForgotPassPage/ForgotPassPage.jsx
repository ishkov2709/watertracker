import { useDispatch } from 'react-redux';
import ForgotPass from './ForgotPass';
import { restoreUser } from 'store/auth/thunk';

const ForgotPassPage = () => {
  const dispatch = useDispatch();

  const restore = body => {
    dispatch(restoreUser(body));
  };

  return (
    <>
      <ForgotPass restore={restore} />
    </>
  );
};

export default ForgotPassPage;
