import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Layout } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Outlet />
      </main>
    </Layout>
  );
};

export default SharedLayout;
