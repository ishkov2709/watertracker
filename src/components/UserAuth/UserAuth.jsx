import Icon from "../Icon/index.js";
import { color } from 'styles/colors.js';
import { Circle } from './UserAuth.styled.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const UserAuth = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const email = useSelector(state => state.auth.user.email);
    return (
        <>
            {isLoggedIn ? (
                <button>
                    <span>${email}</span> 
                    <Circle/>
                </button>
            ) : (
                <Link to='/signin'>
                    <span>Sign in</span>    
                    <Icon
                        name="user"
                        fill={color.primary.black}
                        stroke={color.primary.black}
                        width={28}
                        height={28}
                    />
                </Link>
            )}
        </>      
  );
};

export default UserAuth;