import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/loader/Loader';
import { ROUTES } from './utils/routes';

const Home = lazy(() => import('./pages/home/Home'));
const Creche = lazy(() => import('./pages/creche/Creche'));
const Nursery = lazy(() => import('./pages/nursery/Nursery'));
const Primary = lazy(() => import('./pages/primary/Primary'));
const NotFoundPage = lazy(() => import('./pages/Error/Error'));
const About = lazy(() => import('./pages/about/About'));

const HomePage = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.home}
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.about}
        element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.creche}
        element={
          <Suspense fallback={<Loader />}>
            <Creche />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.preSchool}
        element={
          <Suspense fallback={<Loader />}>
            <Nursery />
          </Suspense>
        }
      />

      <Route
        path={ROUTES.gradeSchool}
        element={
          <Suspense fallback={<Loader />}>
            <Primary />
          </Suspense>
        }
      />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default HomePage;
