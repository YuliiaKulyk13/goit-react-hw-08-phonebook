import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/user/userOperations';
import { selectUserName } from 'redux/user/userSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  // const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} width="30" alt="greeting" />
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
