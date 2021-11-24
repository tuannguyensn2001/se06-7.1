import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";

function Header() {
  const user = useSelector((state) => state.auth.user);

  const { logoutMutation } = useAuth();

  return (
    <div className={"bg-red-200 flex justify-around"}>
      <div>Hello</div>
      <div>{user.name}</div>
      <button onClick={logoutMutation.mutate}>Đăng xuất</button>
    </div>
  );
}

export default Header;
