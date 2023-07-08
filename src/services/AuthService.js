import { httpService } from "./HttpService";

class AuthService {
  constructor() {
    this.axiosInstance = httpService.axiosInstance;
    this.setAxiosAuthorizationHeader();
  }

  setAxiosAuthorizationHeader(tokenParam = null) {
    let token = tokenParam ? tokenParam : localStorage.getItem("token");
    // console.log(token);
    if (token) {
      this.axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  }

  register() {}

  async login(data) {
    try {
      let response = await this.axiosInstance.post("/login", data);
      if (response.data) {
        localStorage.setItem("token", response.data.authorization.token);
        this.setAxiosAuthorizationHeader(response.data.authorization.token);
      }
      return response;
    } catch (error) {}
  }

  logout() {}

  async refresh() {
    try {
      const response = await this.axiosInstance.post("/refresh");
      if (response.data) {
        localStorage.setItem("token", response.data.authorization.token);
        this.setAxiosAuthorizationHeader(response.data.authorization.token);
      }
      return response.data;
    } catch (error) {}
  }
}

export const authService = new AuthService();
