import Container from 'components/common/Container';
import { Wrapper } from './WelcomePage.styled';
import WelcomeTracker from '../../components/WaterTracker';
import WhyDrinkWater from '../../components/WhyDrinkWater';
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
