import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://winereview-api.vercel.app/12-3",
  // headers: {
  //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTExMSwidGVhbUlkIjoiMTItMzMiLCJzY29wZSI6ImFjY2VzcyIsImlhdCI6MTc0MDczMTkyMSwiZXhwIjoxNzQwNzMzNzIxLCJpc3MiOiJzcC1lcGlncmFtIn0.mPtMTFGet2FZ-YZQlfxcNwawlcFOOwvr2O5s_vQEbN0`,
  // },
})
