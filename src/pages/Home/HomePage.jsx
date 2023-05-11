// export const HomePage = () => {
//   <div>
//     <h1>Hey there👋🏼! Let's begin to create our contacts 🥳</h1>
//   </div>;

import { Container, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Title>
        Hey there ! With this application you can have your phonebook always
        with you. Please create your account and manage your contacts.
      </Title>
    </Container>
  );
};
export default HomePage;
