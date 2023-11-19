import { useSelector } from 'react-redux';
import { Circle, AvatarBtn, UserName, AvatarImg } from './Avatar.styled';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors.js';


const Avatar = () => {
  const name = useSelector(state => state.auth.user.username);
  const avatar = useSelector(state => state.auth.user.avatarURL);
  const firstLetter = name.slice(0, 1);
  const index = name.indexOf('@');
  const emailName = name.slice(0, index);

  return (
    <AvatarBtn>
      {(name.includes('@')) ? (<UserName>{emailName}</UserName>) : (<UserName>{name}</UserName>)}
      <>
        <Circle>
          {avatar ? (<AvatarImg src={avatar} alt="logo" />) : <p>{firstLetter.toUpperCase()}</p>}
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
  );
};

export default Avatar;
