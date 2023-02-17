import { SET_PRODUCTS, SET_AUTHENTICATION_STATUS, SET_LOADING_STATUS } from "../constants/actionTypes";
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

export const getProducts = () => async (dispatch) => {
  try {
    const response = await AuthService.getProducts();
    if (response.status == 403) {
      refreshTokens();
      getProducts();
    } else {
      dispatch(setProducts(response.data));
    }
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const addNewProduct = (title, manufacturer, categoryTitle) => async (dispatch) => {
  try {
    const response = await AuthService.addNewProduct(title, manufacturer, categoryTitle);
    dispatch(getProducts());
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const login = (username, password) => async (dispatch) => {
  dispatch(setLoadingStatus(true));
  try {
    const response = await AuthService.login(username, password);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    dispatch(setAuthenticationStatus(true));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
  dispatch(setLoadingStatus(false));
};

export const register = (username, password) => async (dispatch) => {
  dispatch(setLoadingStatus(true));
  try {
    const response = await AuthService.register(username, password);
    console.log(response);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    dispatch(setAuthenticationStatus(true));
  } catch (e) {
    console.log(e.response?.data?.message);
  }
  dispatch(setLoadingStatus(false));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  dispatch(setAuthenticationStatus(false));
};

export const refreshTokens = () => async (dispatch) => {
  const response = await AuthService.refresh();
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("refreshToken", response.data.refreshToken);
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await AuthService.deleteProduct(id);
    dispatch(getProducts());
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const updateProduct = (title, manufacturer, categoryTitle, id) => async (dispatch) => {
  try {
    const response = await AuthService.updateProduct(title, manufacturer, categoryTitle, id);
    dispatch(getProducts());
  } catch (e) {
    console.log(e.repsonse?.data?.message);
  }
};
