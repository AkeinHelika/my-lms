import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const createCourse = async () => {
    await addDoc(collection(db, "courses"), { title, description: desc });
    alert("Course created!");
  };

  return (
    <div className="card">
      <h1>Admin Panel</h1>
      <input placeholder="Course title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
      <button onClick={createCourse}>Create Course</button>
    </div>
  );
}
