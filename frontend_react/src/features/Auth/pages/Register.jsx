import useAuth from "@/hooks/useAuth";
import styles from "./register.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "antd";

function Register() {
  const { registerMutation } = useAuth();

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    registerMutation.mutate(data);
  };

  return (
    
    <div className={styles.wrapper}>
      <div className={styles["signup-box"]}>
        <h2>Create account</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className={styles["user-box"]}>
            <label>Username</label>
            <Input {...register("username")} type="text" />
          </div>
          <div className={styles["user-box"]}>
            <label>Email</label>
            <Input  {...register("email")} type="email"/>
            
          </div>
          <div className={styles["user-box"]}>
            <label>Password</label>
            <Input {...register("password")} type="password"/>
            
          </div>
          <div className={styles["user-box"]}>
            <label>Check Password</label>
            <Input {...register("checkpassword")} type="checkpassword"/>
            
          </div>
          <div className={"signup-btn"}>
            <button type={"submit"}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
