import axios from "axios";
import history from "../routers/history";

const axiosClient = axios.create({
  baseURL: "http://54.251.9.119:3000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { status } = error.response;
    if (status === 404) {
      history.push("/404");
      throw error.response?.data?.message || error;
    }
    if (status === 404) {
      history.push("/500");
      throw error.response?.data?.message || error;
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
