import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
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
