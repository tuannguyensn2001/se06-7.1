import styled from "styled-components";

const Title = styled.div`
  color: blue;
  background-color: red;
`;

//PascalCase

function Login() {
  return (
    <div class="login-box">
      <h2>Log in</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required=""></input>
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""></input>
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  )
}

export default Login;
