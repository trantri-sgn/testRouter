import axiosClient from "./axios.Client";

const testApi = {
  getAll() {
    const url = "/products";
    return axiosClient.get(url);
  },
};

export default testApi;
