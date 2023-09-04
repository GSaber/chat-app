import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
interface error {
  code: number;
  message: string;
  error: [{ message: string; domain: string; reason: string }];
}
function Register() {
  const [err, setErr] = useState<error>();
  const navigate = useNavigate();
  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: any;
  }) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL,
        });
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });
        await setDoc(doc(db, "userChats", res.user.uid), {});
        navigate("/");
      });
    } catch (err) {
      setErr(err as error);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">CHAT_APP</span>
        <span className="title">REGISTER</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display name" />
          <input autoComplete="on" type="email" placeholder="Email" />
          <input
            autoComplete="current-password"
            type="password"
            placeholder="password"
          />
          <input style={{ display: "none" }} type="file" id="avatar" />
          <label htmlFor="avatar">
            <img src={require("../img/AddAvatar.png")} alt="" />
            <span>Add Avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span className="error">{"Error: " + err.code}</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}
export default Register;
