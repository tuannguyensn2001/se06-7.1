import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { Input } from "antd";

function Register() {
  const { registerMutation } = useAuth();

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    registerMutation.mutate(data);
  };

  return (
    <div className="signup-box">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className="user-box">
          <Input />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="email"></input>
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password"></input>
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="checkpassword"></input>
          <label>Check Password</label>
        </div>
        <button className={"bg-blue-500 rounded shadow"}>Đăng ký</button>
      </form>
    </div>
  );
}

export default Register;
