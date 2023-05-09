// import { useAuth } from 'hooks';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <nav>
      {isLoggedIn ? (
        <NavLink to="/contacts">Contacts</NavLink>
      ) : (
        <NavLink to="/">Home</NavLink>
      )}
    </nav>
  );
};
