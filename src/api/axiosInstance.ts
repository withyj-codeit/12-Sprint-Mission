import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  headers: {
    Authorization: typeof window !== 'undefined' ? `Bearer ${window.localStorage.getItem("token")}` : ''
  }
})
