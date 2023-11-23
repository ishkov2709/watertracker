import Container from 'components/common/Container';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import UserAuth from 'components/UserAuth/UserAuth';
import Logo from 'img/logo/Logo.png';
import { LogoBtn, LogoImg, HeaderItm } from './Header.styled';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <HeaderItm>
        {isLoggedIn ? (
          <nav>
            <Link to="/home">
              <LogoBtn>
                <LogoImg src={Logo} alt="logo" />
              </LogoBtn>
            </Link>
          </nav>
        ) : (
          <nav>
            <Link to="/">
              <LogoBtn>
                <LogoImg src={Logo} alt="logo" />
              </LogoBtn>
            </Link>
          </nav>
        )}
        <UserAuth />
      </HeaderItm>
    </Container>
  );
};

export default Header;
