import { useMutation } from "react-query";
import { fetchUpdateModel } from "@/services/models";
import useNotification from "@/hooks/useNotification";

export default function useUpdateModel() {
  const fire = useNotification();

  return useMutation(
    "update",
    async ({ id, data }) => {
      const response = await fetchUpdateModel(id, data);
      return response.data;
    },
    {
      onSuccess(data) {
        fire.success(data.message);
      },
      onError(error) {
        fire.error(error?.response?.data?.message);
      },
    }
  );
}
