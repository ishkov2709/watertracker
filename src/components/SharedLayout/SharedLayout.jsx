import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Layout } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/common/Loader';
import DailyNormaModal from 'components/DailyNormaModal/DailyNormaModal';

const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Layout>
  );
};

export default SharedLayout;
