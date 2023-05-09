import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_LINK,
    withCredentials: true,
});
export default axiosInstance;
