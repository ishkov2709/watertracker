import Icon from "components/Icon";
import { color } from 'styles/colors.js';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar/index.js';
import { Signin, SigninText } from './UserAuth.styled.jsx';




const UserAuth = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    
    return (
        <>
            {isLoggedIn ? (
                <Avatar/>
            ) : (
                    <SigninText  to='/signin'>
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