import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import { Container, User } from './ProfilePage.styled';

export const ProfilePage = () => {
  const user = useSelector(authSelectors.selectAuthUser);

  return (
    <Container>
      <User>Welcome, {user.name}</User>
      <User>This is your {user.email} email</User>
      <img
        src={
          user.avatar.includes('gravatar')
            ? user.avatar
            : `http://localhost:8080/${user.avatar}`
        }
        alt=""
      />
      <Link to="update">Update</Link>
    </Container>
  );
};
export default ProfilePage;
