import Container from 'components/Container';
import { Wrapper } from './WelcomePage.styled';
import DaysGeneralStats from 'components/DaysGeneralStats';

const WelcomePage = () => {
  return (
    <Wrapper>
      <Container>
        <p>WelcomePage</p>
        <DaysGeneralStats />
      </Container>
    </Wrapper>
  );
};

export default WelcomePage;
