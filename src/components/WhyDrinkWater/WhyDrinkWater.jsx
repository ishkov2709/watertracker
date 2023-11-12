import {
  WdwWrapper,
  WdwTitle,
  WdwList,
  WdwItem,
  WdwItemText,
  WdwIconBox,
} from './WhyDrinkWater.styled';
import Icon from 'components/common/Icon';
import { color } from 'styles/colors';

const WhyDrinkWater = () => {
  return (
    <WdwWrapper>
      <WdwTitle>Why drink water</WdwTitle>
      <WdwList>
        <WdwItem>
          <WdwIconBox>
            <Icon
              name={'Ellipse'}
              width={8}
              height={8}
              fill={color.primary.blue}
              stroke={color.primary.blue}
            ></Icon>
          </WdwIconBox>
          <WdwItemText>Supply of nutrients to all organs</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Icon
              name={'Ellipse'}
              width={8}
              height={8}
              fill={color.primary.blue}
              stroke={color.primary.blue}
            ></Icon>
          </WdwIconBox>
          <WdwItemText>Providing oxygen to the lungs</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Icon
              name={'Ellipse'}
              width={8}
              height={8}
              fill={color.primary.blue}
              stroke={color.primary.blue}
            ></Icon>
          </WdwIconBox>
          <WdwItemText>Maintaining the work of the heart</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Icon
              name={'Ellipse'}
              width={8}
              height={8}
              fill={color.primary.blue}
              stroke={color.primary.blue}
            ></Icon>
          </WdwIconBox>
          <WdwItemText>Release of processed substances</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Icon
              name={'Ellipse'}
              width={8}
              height={8}
              fill={color.primary.blue}
              stroke={color.primary.blue}
            ></Icon>
          </WdwIconBox>
          <WdwItemText>
            Ensuring the stability of the internal environment
          </WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Icon
              name={'Ellipse'}
              width={8}
              height={8}
              fill={color.primary.blue}
              stroke={color.primary.blue}
            ></Icon>
          </WdwIconBox>
          <WdwItemText>Maintaining within the normal temperature</WdwItemText>
        </WdwItem>
        <WdwItem>
          <WdwIconBox>
            <Icon
              name={'Ellipse'}
              width={8}
              height={8}
              fill={color.primary.blue}
              stroke={color.primary.blue}
            ></Icon>
          </WdwIconBox>
          <WdwItemText>
            Maintaining an immune system capable of resisting disease
          </WdwItemText>
        </WdwItem>
      </WdwList>
    </WdwWrapper>
  );
};

export default WhyDrinkWater;
