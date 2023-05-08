import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useAuth } from 'hooks';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  //   const contactsLoading = useSelector(selectIsLoading);
  //   // const contactsError = useSelector(selectError);
  //   const { isLoading } = useAuth();

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* {isLoading || (contactsLoading && <Loader />)} */}
    </div>
  );
};
