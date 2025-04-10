import axios from "axios";
import { LoginPayload } from "../Components/LoginForm";

const axiosHandler = axios.create({ baseURL: "http://localhost:5000/api" });

export const getCardProducts = async () => {
  try {
    const res = await axiosHandler.get("/products");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};


export const loginUserAPI = async ({ username, password }: LoginPayload) => {
  const res = await axiosHandler.post("/users/login", { username, password });
  return res.data;
};

export const getSingleProduct = async (id:string|undefined) => {
  const res = await axiosHandler.get(`/products/${id}`);
  return res.data;
};