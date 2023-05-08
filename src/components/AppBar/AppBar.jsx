import { AuthNav } from 'components/AuthNav/AuthNav';
// import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
// import { useSelector } from 'react-redux';

// import { selectIsLoggedIn } from 'redux/user/userSelectors';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>{isLoggedIn && <NavLink to="contacts">contacts</NavLink>}</li>
        {/* <Navigation /> */}
      </ul>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
