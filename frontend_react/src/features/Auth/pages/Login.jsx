

// function Login() {
//   return (
//     <div class="login-box">
//       <h2>Log in</h2>
//       <form>
//         <div class="user-box">
//           <input type="text" name="" required=""></input>
//           <label>Username</label>
//         </div>
//         <div class="user-box">
//           <input type="password" name="" required=""></input>
//           <label>Password</label>
//         </div>
//         <a href="#">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           Submit
//         </a>
//       </form>
//     </div>
//   )


import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";

function Login() {
  const { loginMutation } = useAuth();

  return (
    <div>
      <button
        onClick={() =>
          loginMutation.mutate({
            email: "tuannguyensn2001a@gmail.com",
            password: "java2001",
          })
        }
      >
        Click
      </button>
    </div>
  );

}

export default Login;
