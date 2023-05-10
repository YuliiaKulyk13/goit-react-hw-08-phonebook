// import { useAuth } from 'hooks';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
