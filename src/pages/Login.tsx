import React from "react";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CHAT-APP</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />

          <button>Sign In</button>
        </form>
        <p>You dont have an account? Register</p>
      </div>
    </div>
  );
}
export default Login;
