
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProfileCard from "./ProfileCard";
// import Counter from "./Counter";
// import TextPreview from "./TextPreview";
// import TodoApp from "./TodoApp";
// import StudentDirectory from "./StudentDirectory";
// import ProductList from "./ProductList";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import ProtectedRoute from "./ProtectedRoute";

// function App() {
//   return (
//     <div>
//       <ProfileCard
//         name="Tanvi Kadam"
//         title="Student & Developer"
//         bio="Loves coding, learning React, and exploring backend development."
//       />

//       {/* Counter Section */}
//       <h1>Counter</h1>
//       <Counter />

//       {/* Text Preview Section */}
//       <h1>Live Text Preview</h1>
//       <TextPreview />

//       <TodoApp />
//       <StudentDirectory />
//       <ProductList />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Counter from "./Counter";
import TextPreview from "./TextPreview";
import TodoApp from "./TodoApp";
import StudentDirectory from "./StudentDirectory";
import ProductList from "./ProductList";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      {/* 🔹 Simple Navigation */}
      <nav style={{ margin: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        {/* 🔹 Home Page */}
        <Route
          path="/"
          element={
            <div>
              <ProfileCard
                name="Tanvi Kadam"
                title="Student & Developer"
                bio="Loves coding, learning React, and exploring backend development."
              />

              <h1>Counter</h1>
              <Counter />

              <h1>Live Text Preview</h1>
              <TextPreview />

              <TodoApp />
              <StudentDirectory />
              <ProductList />
            </div>
          }
        />

        {/* 🔹 Auth Pages */}
        <Route path="/login" element={<Login />} />

        {/* 🔹 Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
