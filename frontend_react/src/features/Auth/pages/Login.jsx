import styled from "styled-components";
import styles from "./login.module.scss";
import { useForm, Controller } from "react-hook-form";
import useAuth from "@/hooks/useAuth";

const Title = styled.div`
  color: blue;
  background-color: red;
`;

function Login() {
  const { register, handleSubmit, control } = useForm();

  const { loginMutation } = useAuth();

  const submit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["login-box"]}>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles["user-box"]}>
            <input {...register("email")} type="text" />
            <label>Username</label>
          </div>
          <div className={styles["user-box"]}>
            <input {...register("password")} type="password" />
            <label>Password</label>
          </div>

          {/*<a href="#">*/}
          {/*  <span></span>*/}
          {/*  <span></span>*/}
          {/*  <span></span>*/}
          {/*  <span></span>*/}
          {/*  Submit*/}
          {/*</a>*/}
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
