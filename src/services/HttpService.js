import axios from "axios";

class HttpService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://127.0.0.1:8000/api",
    });
  }

  // attachAuthorizationHeader(token) {
  //   this.axiosInstance.defaults.headers.common["Authorization"] = token;
  // }
}

export const httpService = new HttpService();
