import API from '../api';

export const getProducts = async () => {
  try {
    const response = await API.get(`/api/products`);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const addProducts = async (payload) => {
  let productData;
  try {
    const response = await API.post(`/api/products`, payload);
    productData = response.data;
    return productData
  } catch (error) {
    console.log(error.response.data);
    return false;
  }
  return productData
};

export const getProduct = async (id) => {
  try {
    const response = await API.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteProducts = async (id) => {
  try {
    const response = await API.delete(`/api/products/${id}`);
    return true;
  } catch (error) {
    console.log(error.response.data);
    return false;
  }
};

export const updateProducts = async (id, payload) => {
  try {
    const response = await API.put(`/api/products/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return false;
  }
};
