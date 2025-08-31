
import React from "react";
import ProfileCard from "./ProfileCard";
import Counter from "./Counter";
import TextPreview from "./TextPreview";
import StudentDirectory from "./StudentDirectory";

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

      <StudentDirectory />
    </div>
  );
}

export default App;
