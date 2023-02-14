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

export const loginRequest = (email, password) => async (dispatch) => {
  try {
    const response = await AuthService.login(email, password);
    localStorage.setItem("token", response.data.accessToken);
    dispatch(setAuthenticationStatus(true));
    dispatch(setProducts(response.data.products));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const registerRequest = (email, password) => async (dispatch) => {
  try {
    const response = await AuthService.register(email, password);
    localStorage.setItem("token", response.data.accessToken);
    dispatch(setAuthenticationStatus(true));
    dispatch(setProducts(response.data.products));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await AuthService.logout();
    localStorage.removeItem("token");
    dispatch(setAuthenticationStatus(false));
    dispatch(setProducts({}));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};
