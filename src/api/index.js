import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

const getAllDockets = () => api.get(`/docket/getdockets`);
const getPONumberandDescription = (payload) => {
  return api.post(`/supplier/getpoorders`, payload);
};
const getUniqueSuppliers = () => api.get(`/supplier/getUniqueSuppliers`);
const createOrder = (payload) => api.post(`/docket/createorder`, payload);
const getOrders = () => api.get(`/docket/getorders`);

export {
  getAllDockets,
  getPONumberandDescription,
  getUniqueSuppliers,
  createOrder,
  getOrders,
};
