import styles from "./login.module.scss";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "antd";

import useAuth from "@/hooks/useAuth";

function Login() {
  const { register, handleSubmit, control } = useForm();

  const { loginMutation } = useAuth();

  const submit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["login-box"]}>
        <h2>Welcome</h2>

        <form onSubmit={handleSubmit(submit)}>
          <div className={styles["user-box"]}>
            <label>Email</label>
            <Controller
              name={"email"}
              control={control}
              render={({ field }) => <Input {...field} type="text" />}
            />
          </div>

          <div className={styles["user-box"]}>
            <label>Password</label>
            <Controller
              name={"password"}
              control={control}
              render={({ field }) => <Input {...field} type="password" />}
            />
          </div>

          <div className={"login-btn float-right"}>
            <button type={"submit"}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
