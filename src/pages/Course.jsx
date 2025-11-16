import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

export default function Course() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function load() {
      const snap = await getDoc(doc(db, "courses", id));
      if (snap.exists()) setCourse(snap.data());
    }
    load();
  }, []);

  if (!course) return <h1>Loading…</h1>;

  return (
    <div className="card">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}
