import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", user.user.uid), {
        name,
        email,
        role: "student",
        createdAt: serverTimestamp(),
      });

      window.location.href = "/";
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="card">
      <h1>Register</h1>
      <input placeholder="Full name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
