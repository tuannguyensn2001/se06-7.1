import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { fetchLogin, fetchMe, fetchRegister } from "@/features/Auth/services";
import { setLogin, setLogout, setMe } from "@/features/Auth/slices";
import useNotification from "@/hooks/useNotification";
import { useNavigate } from "react-router-dom";

export default function useAuth(setReady = () => {}) {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const fire = useNotification();

  const navigate = useNavigate();

  const loginMutation = useMutation((data) => fetchLogin(data), {
    onSuccess(response) {
      const {
        data: {
          data: { access_token, user },
        },
      } = response;

      dispatch(
        setLogin({
          access_token,
          user,
        })
      );

      navigate("/");

      fire.success(response.data.message);
    },
    onError(error) {
      fire.error(error.response.data.message);
    },
  });

  const getMeMutation = useMutation(
    () => {
      const token = localStorage.getItem("token");

      if (!token) throw new Error("Not token");

      return fetchMe();
    },
    {
      onSuccess(response) {
        const {
          data: { data },
        } = response;

        dispatch(setMe(data));
        setReady(true);
      },
      onError(error) {
        setReady(true);
        fire.error(error.response.data.message);
      },
    }
  );

  const logoutMutation = {
    mutate() {
      dispatch(setLogout());
      navigate("/");
      fire.success("Đăng xuất thành công");
    },
  };

  const registerMutation = useMutation((data) => fetchRegister(data), {
    onSuccess(response) {
      navigate("/login");
      fire.success(response.data.message);
    },
    onError(error) {
      fire.error(error.response.data.message);
    },
  });

  return {
    loginMutation,
    getMeMutation,
    logoutMutation,
    registerMutation,
    auth,
  };
}
