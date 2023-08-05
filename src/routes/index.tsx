import { ElementType, Suspense, lazy } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import RGForm from 'src/pages/RGForm';

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const isDashboard = pathname.includes('/dashboard') ;

  return (
    <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '*',
      element: <RGForm /> 
    },
  ]);
}

