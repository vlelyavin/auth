import { SET_PRODUCTS, SET_AUTHENTICATION_STATUS, SET_LOADING_STATUS } from "../../constants/actionTypes";
import { AuthService } from "../services/AuthSerice";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setAuthenticationStatus = (status) => ({
  type: SET_AUTHENTICATION_STATUS,
  payload: status,
});

export const setLoadingStatus = (status) => ({
  type: SET_LOADING_STATUS,
  payload: status,
});

export const loginRequest = (username, password) => async (dispatch) => {
  try {
    const response = await AuthService.login(username, password);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    dispatch(setAuthenticationStatus(true));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const registerRequest = (username, password) => async (dispatch) => {
  try {
    const response = await AuthService.register(username, password);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    dispatch(setAuthenticationStatus(true));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const getProducts = () => async () => {
  try {
    const response = await AuthService.getProducts();
    console.log(response);
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const logout = () => () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};

export const checkAuth = () => async (dispatch) => {
  dispatch(setLoadingStatus(true));
  try {
    const response = await AuthService.refresh();
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("token", response.data.refreshToken);
    dispatch(setAuthenticationStatus(true));
  } catch (e) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoadingStatus(false));
  }
};
