import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  }
);

export default instance;
