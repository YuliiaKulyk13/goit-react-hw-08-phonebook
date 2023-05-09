import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useAuth } from 'hooks';
import { AppBar } from './components/AppBar/AppBar';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestricredRoute';
import { Layout } from './components/Layout/Layout.styled';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';

import { HomePage } from './pages/Home/HomePage';

import { Loader } from './components/Loader/Loader';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { LoginPage } from 'pages/Login/LoginPage';
import { ContactsPage } from 'pages/Contacts/ContactsPage';
import authSelectors from 'redux/auth/authSelectors';

// import { UserMenu } from './UserMenu/UserMenu';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route index element={<HomePage />} />
              <Route
                path="register"
                element={
                  <RestrictedRoute redirectTo="/contacts">
                    <RegisterPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute redirectTo="/contacts">
                    <LoginPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
