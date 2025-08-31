import React, { useEffect, useState } from "react";

function StudentDirectory() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading students...</p>;
  }

  return (
    <div>
      <h2>📘 Student Directory</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> – {student.course} ({student.age} yrs)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDirectory;


// import React from "react";

// function StudentDirectory() {
//   const students = [
//     { id: 1, name: "Sanskriti", age: 19 },
//     { id: 2, name: "Krishna", age: 20 },
//     { id: 3, name: "Tanvi", age: 19 }
//   ];

//   return (
//     <div>
//       <h2>Student Directory</h2>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             {student.name} - {student.age} years old
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StudentDirectory;
