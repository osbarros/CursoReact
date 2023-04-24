import jwtDecode from "jwt-decode";

export const getUser = () => JSON.parse(localStorage.getItem("user"));
export const getToken = () => localStorage.getItem("token");
export const setUser = (user) =>
  localStorage.setItem("user", JSON.stringify(user));

export const login = (token) => {
  const { user } = jwtDecode(token);

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};
export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");

  window.location.href = "/login"; // Bad pratice
};
