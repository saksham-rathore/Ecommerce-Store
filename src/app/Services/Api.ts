// import axios from "axios";

const BASE_URL = "http://localhost:5000";

// export const getAllProducts = async () => {
//   return axios.get(`${BASE_URL}/user/getallproducts`);
// };

// export const getsingleproduct = async (id: number) => {
//     return axios.post(`${BASE_URL}/getsingleproduct/${id}`);
// };

// export const UpdateProduct = async (id: number) => {
//     return axios.post(`${BASE_URL}/UpdateProduct/${id}`);
// };

// export const DeleteProduct = async (id: number) => {
//     return axios.post(`${BASE_URL}/DeleteProduct/${id}`);
// };

// export const addToCart = async (id: number) => {
//     return axios.post(`${BASE_URL}/addtocart/${id}`);
// };

// export const GetCart = async () => {
//     return axios.post(`${BASE_URL}/GetCart`);
// };

// export const RemoveCartItem = async (id: number) => {
//     return axios.post(`${BASE_URL}/RemoveCartItem/${id}`);
// };

// export const DeleteCart = async (id: number) => {
//     return axios.post(`${BASE_URL}/DeleteCart/${id}`);
// };

// export const createOrder = async () => {
//     return axios.post(`${BASE_URL}/createOrder`);
// };

// export const Getallorders = async () => {
//     return axios.post(`${BASE_URL}/Getallorders`);
// };

// export const GetSingleOrder = async (id: number) => {
//     return axios.post(`${BASE_URL}/GetSingleOrder/${id}`);
// };

// export const UpdateOrder = async (id: number) => {
//     return axios.post(`${BASE_URL}/UpdateOrder/${id}`);
// };

// export const DeleteOrder = async (id: number) => {
//     return axios.post(`${BASE_URL}/DeleteOrder/${id}`);
// };

// export const payment = async () => {
//     return axios.post(`${BASE_URL}/payment`);
// };


// const BASE_URL = "http://localhost:5000";

// GET products
export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/user/getallproducts`);

  if (!res.ok) {
    console.log("Failed to fetch products");
  }

  return res.json();
};