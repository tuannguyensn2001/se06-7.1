import SE_API from "@/apps/network";

export const fetchBaseModel = (id) => {
  return SE_API.get(`/v1/base-models/${id}`);
};

export const fetchCreateModel = (data) => {
  return SE_API.post("/v1/models", data);
};
