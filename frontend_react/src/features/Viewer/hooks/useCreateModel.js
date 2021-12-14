import { useMutation } from "react-query";
import { fetchCreateModel } from "@/features/Viewer/services";
import useNotification from "@/hooks/useNotification";
import { useNavigate } from "react-router-dom";

export default function useCreateModel() {
  const fire = useNotification();

  const navigate = useNavigate();

  return useMutation(
    "create",
    async (data) => {
      const response = await fetchCreateModel(data);
      return response.data;
    },
    {
      onSuccess(response) {
        fire.success(response.message);
        navigate("/my-models");
      },
      onError(error) {
        fire.error(error?.response?.data?.message);
      },
    }
  );
}
