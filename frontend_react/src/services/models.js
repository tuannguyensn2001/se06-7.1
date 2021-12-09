import SE_API from "@/apps/network";

export const fetchMyModel = () => {
  return SE_API.get("/v1/models");
};