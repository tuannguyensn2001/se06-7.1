import SE_API from "@/apps/network";

export const fetchBaseModel = (id) => {
  return SE_API.get(`/v1/base-models/${id}`);
};