import Container from 'components/Container';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Layout } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Container>
          <p>hihihi</p>
        </Container>
      </main>
      <Outlet />
    </Layout>
  );
};

export default SharedLayout;
