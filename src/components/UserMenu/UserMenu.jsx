// import { useAuth } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { Container, LogOutBtn, UserName } from './UserMenu.styled';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);

  return (
    <Container>
      <UserName>Welcome, {name}</UserName>
      <Link to="/profile">Profile</Link>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogOutBtn>
    </Container>
  );
};
