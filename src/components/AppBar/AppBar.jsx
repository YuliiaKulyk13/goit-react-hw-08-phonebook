import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
// import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { Header } from './AppBar.styled';
// import { useSelector } from 'react-redux';

// import { selectIsLoggedIn } from 'redux/user/userSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
