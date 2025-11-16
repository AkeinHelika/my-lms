import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "courses"));
      setCourses(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Courses</h1>

      {courses.map((c) => (
        <div className="card" key={c.id}>
          <h2>{c.title}</h2>
          <p>{c.description}</p>
          <Link to={`/course/${c.id}`}>
            <button>Open</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
