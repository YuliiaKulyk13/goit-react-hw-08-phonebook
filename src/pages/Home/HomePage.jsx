// export const HomePage = () => {
//   <div>
//     <h1>Hey there👋🏼! Let's begin to create our contacts 🥳</h1>
//   </div>;

import { Container, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Title>
        Hey there👋🏼! Here you can create your personal phonebook 📚 Just click
        button "Register" or "Log in " first and you good to go.
      </Title>
    </Container>
  );
};
export default HomePage;
