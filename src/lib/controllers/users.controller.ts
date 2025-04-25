import api from "../api";

type GetUsersResponse = {
  users: string[];
};

type GetPlansResnponse = {
  plans: string[];
}

export async function getUsers() {
  const res = await api.get<GetUsersResponse>("/home");
  return res.data;
}


export async function getPlansList() {
  const res = await api.get<GetPlansResnponse>('/plans');
  return res.data;
}

export async function submitPlans(plans: string[]) {
  const res = await api.post("/plans", plans);
  return res.data;
}