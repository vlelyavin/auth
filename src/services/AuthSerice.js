import { $api } from "../http";

const config = {
  headers: {
    Authorization: "Bearer_" + localStorage.getItem("token"),
  },
};

export const AuthService = {
  login: (username, password) => {
    return $api.post("/auth/login", { username, password });
  },

  register: (username, password) => {
    return $api.post("/auth/register", { username, password });
  },

  refresh: () => {
    return $api.get("/auth/refresh", { withCredentials: true });
  },

  getProducts: () => {
    return $api.get("/product/list", config);
  },

  addNewProduct: (title, manufacturer, categoryTitle) => {
    return $api.post("/product/add", { title, manufacturer, categoryTitle }, config);
  },

  deleteProduct: (id) => {
    return $api.delete("/product/delete/" + id, config);
  },

  updateProduct: (title, manufacturer, categoryTitle, id) => {
    return $api.put("/product/update/" + id, { title, manufacturer, categoryTitle }, config);
  },
};
