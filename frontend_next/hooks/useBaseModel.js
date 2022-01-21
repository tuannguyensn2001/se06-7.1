import { useQuery } from "react-query";
import { fetchBaseModel } from "@/services/base_model";

export default function useBaseModel() {
  return useQuery("base", async () => {
    const response = await fetchBaseModel();
    return response.data.data;
  });
}
