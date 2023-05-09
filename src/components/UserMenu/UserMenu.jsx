// import { useAuth } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);
  const email = useSelector(authSelectors.selectUserEmail);
  return (
    <div>
      <p>Welcome: {name}</p>
      <p>Your email: {email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
