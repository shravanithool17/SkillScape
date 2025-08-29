import React, { useState } from "react";

function TextPreview() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Live Text Preview</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <p>Preview: {text}</p>
    </div>
  );
}

export default TextPreview;
