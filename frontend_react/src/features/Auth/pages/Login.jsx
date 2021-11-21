// import styled from "styled-components";
//
// const Title = styled.div`
//   color: blue;
//   background-color: red;
// `;
//
// //PascalCase
//
// function Login() {
//   return <Title>Login</Title>;
// }
//
// export default Login;

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
