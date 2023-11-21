export const userSelector = state => state.auth.user;
export const authSelector = state => state.auth;
export const tokenSelector = state => state.auth.token;
export const errorSelector = state => state.auth.error;
export const isRefreshingSelector = state => state.auth.isRefreshing;
export const isLoggedInSelector = state => state.auth.isLoggedIn;
export const successfulSelector = state => state.auth.successful;
