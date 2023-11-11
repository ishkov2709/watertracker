import Container from 'components/Container';
import { Wrapper } from './WelcomePage.styled';
import WelcomeTracker from './WaterTracker/WaterTracker';
import WhyDrinkWater from './WhyDrinkWater/WhyDrinkWater';
import { WelcomeWrapper } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Wrapper>
      <Container>
        <WelcomeWrapper>
          <WelcomeTracker />
          <WhyDrinkWater />
        </WelcomeWrapper>
      </Container>
    </Wrapper>
  );
};

export default WelcomePage;
