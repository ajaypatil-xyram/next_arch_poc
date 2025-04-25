import axios from "axios";

export interface LoginCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  message: string;
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  const res = await axios.post("http://localhost:8080/login", credentials);
  console.log(res);
  return res.data
}