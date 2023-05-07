export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;

const userSelectors = {
  selectIsLoggedIn,
  selectUserName,
};

export default userSelectors;
