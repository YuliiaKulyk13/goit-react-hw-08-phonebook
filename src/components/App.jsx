import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import PhoneContacts from './PhoneContacts/PhoneContacts';
import Filter from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactForm } from './ContactsForm/ContactsForm';
import { Layout } from './Layout/Layout.styled';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Notification } from './Notification/Notification';
import { Loader } from './Loader/Loader';
import { AppBar } from './AppBar/AppBar';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';

export function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const contactList = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>

      {/* <Title title={'Phonebook'} />
      <ContactForm />
      <Title title={'Contacts'} />

      {contactList.length > 0 && <Filter />}
      {contactList.length === 0 ? (
        <Notification notification={'There are no contacts.'} />
      ) : (
        <PhoneContacts />
      )}
      {isLoading && !error && <Loader />} */}
    </Layout>
  );
}
