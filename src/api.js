import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/products';

export const getProducts = async () => axios.get(API_URL);
export const getProductById = async (id) => axios.get(`${API_URL}/${id}`);
export const createProduct = async (product) => axios.post(API_URL, product);
export const updateProduct = async (id, product) => axios.put(`${API_URL}/${id}`, product);
export const deleteProduct = async (id) => axios.delete(`${API_URL}/${id}`);
export const getCategories = async () => axios.get(`${API_URL}/categories`);
export const createCategory = async (category) => axios.post(`${API_URL}/categories`, category);
