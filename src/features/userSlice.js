import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user; //action.payload = {user:{username:"", password:""}}
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, setLoading, setError, setUser, removeUser } =
  userSlice.actions;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
