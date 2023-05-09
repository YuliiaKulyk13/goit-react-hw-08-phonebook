import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import PhoneContacts from '../../components/PhoneContacts/PhoneContacts';
import Filter from '../../components/Filter/Filter';
// import { Title } from '../../components/Title/Title';
// import {
//   selectContacts,
//   selectError,
//   selectIsLoading,
// } from 'redux/contacts/selectors';
// import { Notification } from '../../components/Notification/Notification';
// import { Loader } from '../../components/Loader/Loader';
import { ContactForm } from 'components/ContactsForm/ContactsForm';
// import { Helmet } from 'react-helmet';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const contactList = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Title title={'Phonebook'} /> */}
      <h1>Phonebook</h1>
      <ContactForm />
      {/* {isLoading && !error && <Loader />} */}
      {/* <Title title={'Contacts'} /> */}
      <h2>Contacts</h2>
      <Filter />
      <PhoneContacts />
      {/* {contactList.length > 0 && <Filter />}
      {contactList.length === 0 ? (
        <Notification notification={'There are no contacts.'} />
      ) : (
        <PhoneContacts />
      )} */}
    </>
  );
};
