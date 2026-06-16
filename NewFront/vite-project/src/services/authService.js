import api from "../api/api";

export const registerUser = (userData) => {
  return api.post("/users/register", userData);
};

export const loginUser = (credentials) => {
  return api.post("/users/login", credentials);
};