import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [err, setErr] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/");
      });
    } catch (err) {
      setErr(err.code);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CHAT-APP</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            autoComplete="on"
            id="email"
            placeholder="Email"
          />
          <input
            type="password"
            autoComplete="current-password"
            id="password"
            placeholder="password"
          />

          <button>Sign In</button>
          {err && <span className="error">{err}</span>}
        </form>
        <p>
          You dont have an account? <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
}
export default Login;
