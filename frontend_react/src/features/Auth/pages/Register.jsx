
function Register() {
  return (
    <div class="signup-box">
    <h2>Sign up</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required=""></input>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="email" name="" required=""></input>
        <label>Email</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""></input>
        <label>Password</label>
      </div>
      <div class="user-box">
        <input type="checkpassword" name="" required=""></input>
        <label>Check Password</label>
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

export default Register;
