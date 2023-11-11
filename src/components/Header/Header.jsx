import Container from 'components/Container';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserAuth from 'components/UserAuth/UserAuth';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <header>
      <Container>
        {isLoggedIn ? (
          <nav>
            <Link to='/HomePage'>
            </>
          </nav>
        ) : (
            
        )}
      </Container>
    </header>
  );
};

export default Header;
