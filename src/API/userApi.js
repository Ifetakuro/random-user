import axios from "axios";

export const userApi = axios.create({
  baseURL: "https://randomuser.me/api/1.4"
});
