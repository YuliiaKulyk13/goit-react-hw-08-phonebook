import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/user/userOperations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestricredRoute';
import { Layout } from './Layout/Layout.styled';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';

import { Loader } from './Loader/Loader';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
// import { AppBar } from './AppBar/AppBar';
// import { UserMenu } from './UserMenu/UserMenu';

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // return (
  //   <>
  //     {/* <AppBar /> */}
  //     {/* <Loader /> */}
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />

  //         <Route
  //           path="/register"
  //           element={
  //             <RestrictedRoute
  //               redirectTo="/contacts"
  //               component={<Register />}
  //             />
  //           }
  //         />
  //         <Route
  //           path="/login"
  //           element={
  //             <RestrictedRoute redirectTo="/contacts" component={<Login />} />
  //           }
  //         />

  //         <Route
  //           path="/contacts"
  //           element={
  //             <PrivateRoute redirectTo="/login" component={<Contacts />} />
  //           }
  //         />
  //       </Route>
  //     </Routes>
  //     <UserMenu />
  //   </>
  // );
  return (
    // <Loader />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
