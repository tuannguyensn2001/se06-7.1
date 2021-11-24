import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

function Header() {
  const user = useSelector((state) => state.auth.user);

  const { logoutMutation } = useAuth();

  return (
    <div className={styles.header}>
      <div>Hello</div>
      <Link to={"/register"}>Register</Link>
      <div>{user.name}</div>
      <button onClick={logoutMutation.mutate}>Đăng xuất</button>
    </div>
  );
}

export default Header;
