import Container from 'components/common/Container';
import {
  Box,
  Btn,
  Dash,
  IconWrapper,
  SubText,
  Text,
} from './NotFoundPage.styled';
import Icon from 'components/common/Icon';
import { Wrapper } from 'pages/WelcomePage/WelcomePage.styled';
import { color } from 'styles/colors';
import { ButtonContainer } from 'components/common/Button/Button.styled';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Text>
            Not Found{' '}
            <IconWrapper>
              <Icon
                width={36}
                height={36}
                name="bottle"
                fill={color.secondary.azure}
                stroke={color.secondary.azure}
              />

              <Dash />
            </IconWrapper>
          </Text>

          <SubText>Something went wrong...</SubText>

          <div>
            <ButtonContainer>
              <Btn to="/">Go to homepage</Btn>
            </ButtonContainer>
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default NotFoundPage;
