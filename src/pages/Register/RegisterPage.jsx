import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

export const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <h1>Registration</h1>
      </Helmet>
      <RegisterForm />
    </div>
  );
};
