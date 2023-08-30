import React from "react";
function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CHAT-APP</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="avatar" />
          <label htmlFor="avatar">
            <img src={require("../img/AddAvatar.png")} alt="" />
            <span>Add Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}
export default Register;
