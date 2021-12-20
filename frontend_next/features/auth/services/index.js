import SE_API from "@/config/network";

export const fetchLogin = (data) => {
  return SE_API.post("/v1/auth/login", data);
};

export const fetchMe = () => {
  return SE_API.get("/v1/auth/me");
};

export const fetchRegister = (data) => {
  return SE_API.post("/v1/auth/register", data);
};
