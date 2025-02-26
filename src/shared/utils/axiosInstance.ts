import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://winereview-api.vercel.app/12-1",
})
