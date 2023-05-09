import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useAuth } from 'hooks';
import { AppBar } from './components/AppBar/AppBar';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestricredRoute';
import { Layout } from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';

// import { Loader } from './components/Loader/Loader';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { LoginPage } from 'pages/Login/LoginPage';
import { ContactsPage } from 'pages/Contacts/ContactsPage';
import authSelectors from 'redux/auth/authSelectors';
import { HomePage } from 'pages/Home/HomePage';

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
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/tasks"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};
