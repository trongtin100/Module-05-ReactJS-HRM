import { LOCALSTORAGE_KEY } from "../constants";

export const setLocalUser = (data) => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

export const getLocalUser = () => {
  if (localStorage.getItem(LOCALSTORAGE_KEY))
    return localStorage.getItem(LOCALSTORAGE_KEY);
};

export const removeLocalUser = () => {
  localStorage.removeItem(LOCALSTORAGE_KEY);
};
