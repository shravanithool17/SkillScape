
import React from "react";
import ProfileCard from "./ProfileCard";
import Counter from "./Counter";
import TextPreview from "./TextPreview";
import TodoApp from "./TodoApp";
import StudentDirectory from "./StudentDirectory";
//import ProductCard from "./ProductCard";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <ProfileCard
        name="Tanvi Kadam"
        title="Student & Developer"
        bio="Loves coding, learning React, and exploring backend development."
      />

      {/* Counter Section */}
      <h1>Counter</h1>
      <Counter />

      {/* Text Preview Section */}
      <h1>Live Text Preview</h1>
      <TextPreview />

      <TodoApp />
<<<<<<< HEAD
=======

>>>>>>> 20e0ecaf6719792c43db9f3e785695709f84f2e4
      <StudentDirectory />
      <ProductList />
    </div>
  );
}

export default App;
