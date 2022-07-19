export const getToken = () => window.localStorage.getItem("authToken");

export const tokenNeedRefresh = () => false;

export default {};
