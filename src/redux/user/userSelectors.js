export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;

// const userSelectors = {
//   selectIsLoggedIn,
//   selectUserName,
// };

// export default userSelectors;
