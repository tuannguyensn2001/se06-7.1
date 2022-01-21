import SE_API from "@/apps/network";

export const fetchUploadFile = (data) => {
  return SE_API.post("/v1/upload", data);
};