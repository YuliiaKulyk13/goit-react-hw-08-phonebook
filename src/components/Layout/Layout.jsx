import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
// import { useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';
// import { useAuth } from 'hooks';
// import { Loader } from './Loader/Loader';

export const Layout = () => {
  //   const contactsLoading = useSelector(selectIsLoading);
  //   // const contactsError = useSelector(selectError);
  //   const { isLoading } = useAuth();

  return (
    <div>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      {/* {isLoading || (contactsLoading && <Loader />)} */}
    </div>
  );
};
