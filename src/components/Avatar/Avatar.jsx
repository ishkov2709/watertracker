import { useSelector } from 'react-redux';
import { Circle, AvatarBtn, UserName } from './Avatar.styled';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors.js';

const Avatar = () => {
  const name = useSelector(state => state.auth.user.username);
  const firstLetter = name.slice(0, 1);

  if (name) {
    return (
      <AvatarBtn>
        <UserName>{name}</UserName>
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
          ></Icon>
        </>
      </AvatarBtn>
    );
  }
  return (
    <AvatarBtn>
      <UserName>{name}</UserName>
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
        ></Icon>
      </>
    </AvatarBtn>
  );
};

export default Avatar;
