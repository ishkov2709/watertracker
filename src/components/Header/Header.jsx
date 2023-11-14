// Header.js
import React, { useState } from 'react';
import Container from 'components/common/Container';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserAuth from 'components/UserAuth/UserAuth';
import Logo from 'img/logo/Logo.png';
import { LogoBtn, LogoImg, HeaderItm } from './Header.styled';

import DailyNormaModal from 'components/DailyNormaModal/DailyNormaModal';
import Modal from 'components/common/Modal/Modal';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogoClick = () => {
    setModalOpen(true);
  };

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
            <Link to="/" onClick={handleLogoClick}>
              <LogoBtn>
                <LogoImg src={Logo} alt="logo" />
              </LogoBtn>
              {isModalOpen && (
                <Modal>
                  <DailyNormaModal setModalOpen={setModalOpen} />
                </Modal>
              )}
            </Link>
          </nav>
        )}
        <UserAuth />
      </HeaderItm>
    </Container>
  );
};

export default Header;
