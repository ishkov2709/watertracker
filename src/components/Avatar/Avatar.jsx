import { useSelector } from 'react-redux';
import { Circle, AvatarBtn, UserName } from './Avatar.styled';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors.js';
import { fetchAvatar } from './FetchAvatar';

const Avatar = () => {
  const name = useSelector(state => state.auth.user.name);
  const firstLetter = name.slice(0, 1);
  const avatar = fetchAvatar();
  return (
    <AvatarBtn>
      <UserName>{name}</UserName>
      <>
        <Circle>
          {!name && <p>{firstLetter.toUpperCase()}</p>}
          {!avatar && <img scr={avatar} alt=''/>}
          {<p>V</p>}
        </Circle>
        <Icon
          name="arrow-down"
          fill={color.primary.blue}
          stroke={color.primary.blue}
          width={16}
          height={16}
        ></Icon>
      </>
    </AvatarBtn>
  )
};

export default Avatar;
