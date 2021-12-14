import { useMutation } from "react-query";
import { fetchCreateModel } from "@/features/Viewer/services";
import useNotification from "@/hooks/useNotification";

export default function useCreateModel() {
  const fire = useNotification();

  return useMutation(
    "create",
    async (data) => {
      const response = await fetchCreateModel(data);
      return response.data;
    },
    {
      onSuccess(response) {
        fire.success(response.message);
      },
      onError(error) {
        fire.error(error?.response?.data?.message);
      },
    }
  );
}
