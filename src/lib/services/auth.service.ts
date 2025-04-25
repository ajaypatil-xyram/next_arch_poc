import { login } from "../controllers/auth.controller";
import { errorHandler } from "../utils";

export const loginService = errorHandler(login);