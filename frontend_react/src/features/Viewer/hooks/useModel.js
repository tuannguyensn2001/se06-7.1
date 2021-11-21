import { useParams } from "react-router-dom";
import useQueryParams from "@/hooks/useQueryParams";
import { useQuery } from "react-query";
import { fetchBaseModel } from "@/features/Viewer/services";
import useAuth from "@/hooks/useAuth";
import useNotification from "@/hooks/useNotification";

export default function useModel() {
  const { id } = useParams();

  const query = useQueryParams();

  const { auth } = useAuth();

  const fire = useNotification();

  const { data: model } = useQuery(
    ["model", id, query],
    async () => {
      const preview = query.get("preview");

      if (!!preview && Boolean(preview)) {
        const response = await fetchBaseModel(id);
        return response.data.data;
      }
    },
    {
      enabled: !!id,
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  const handleSave = (data) => {
    if (!auth.isAuth) {
      return fire.error("Vui lòng đăng nhập để tiếp tục");
    }
  };

  return {
    src: model?.media?.path,
    handleSave,
  };
}
