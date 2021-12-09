import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

function Header() {
  const { user, isAuth } = useSelector((state) => state.auth);

  const { logoutMutation } = useAuth();

  return (
    <div className={styles.header}>
      <Link to={"/"}>Home</Link>
      <Link to={"/register"}>Register</Link>
      <div>{user.name}</div>

      {isAuth && <button onClick={logoutMutation.mutate}>Đăng xuất</button>}
      {!isAuth && <Link to={"/login"}>Đăng nhập</Link>}
    </div>
  );
}

export default Header;
