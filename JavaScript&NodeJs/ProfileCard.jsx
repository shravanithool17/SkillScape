import React from "react";

export default function ProfileCard({ name, title, bio }) {
  return (
    <div style={{
      maxWidth: "300px",
      margin: "20px auto",
      padding: "16px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ margin: "0", fontSize: "18px" }}>{name || "Unknown"}</h2>
      <p style={{ margin: "4px 0", color: "#666", fontSize: "14px" }}>
        {title || "No Title"}
      </p>
      {bio && (
        <p style={{ fontSize: "13px", marginTop: "8px", color: "#444" }}>
          {bio}
        </p>
      )}
    </div>
  );
}