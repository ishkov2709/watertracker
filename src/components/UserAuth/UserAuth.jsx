import Icon from 'components/common/Icon';
import { color } from 'styles/colors.js';
import Avatar from '../Avatar/index.js';
import { Signin, SigninText } from './UserAuth.styled.jsx';
import { useAuth } from 'hooks/useAuth';

const UserAuth = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Avatar />
      ) : (
        <SigninText to="/signin">
          <Signin>
            <p>Sign in</p>
            <Icon
              name="user"
              fill={color.primary.white}
              stroke={color.primary.black}
              width={28}
              height={28}
            />
          </Signin>
        </SigninText>
      )}
    </>
  );
};

export default UserAuth;
