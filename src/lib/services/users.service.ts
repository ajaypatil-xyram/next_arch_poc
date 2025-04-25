import { getPlansList, getUsers, submitPlans } from "../controllers/users.controller";
import { errorHandler } from "../utils";

export const getUserService = errorHandler(getUsers);
export const getPlansService = errorHandler(getPlansList);
export const submitPlanService = errorHandler(submitPlans);