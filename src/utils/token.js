const TOKEN_KEY = "token_key";

const setToken = (token) => {
  return localStorage.setItem(TOKEN_KEY, token);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const removeToken = () => {
  return localStorage.removeItem(TOKEN_KEY);
};

export { setToken, getToken, removeToken };
