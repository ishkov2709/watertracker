import { useSelector } from 'react-redux';
import { Circle, AvatarBtn, UserName } from './Avatar.styled';
import Icon from 'components/Icon';
import { color } from 'styles/colors.js';

const Avatar = () => { 
    const email = useSelector(state => state.auth.user.email);
    const firstLetter = email.slice(0, 1);

    if (email) { 
        return (
            <AvatarBtn>
                <UserName>{email}</UserName> 
                <>
                    <Circle>
                        <p>{firstLetter.toUpperCase()}</p>
                    </Circle>
                    <Icon
                        name="arrow-down"
                        fill={color.primary.blue}
                        stroke={color.primary.blue}
                        width={16}
                        height={16}
                    >
                    </Icon>
                </>
            </AvatarBtn>
        )
    }
     return (
            <AvatarBtn>
                <UserName>{email}</UserName> 
                <>
                    <Circle>
                        <p>V</p>
                    </Circle>
                    <Icon
                        name="arrow-down"
                        fill={color.primary.blue}
                        stroke={color.primary.blue}
                        width={16}
                        height={16}
                    >
                    </Icon>
                </>
            </AvatarBtn>
        )
}

export default Avatar;