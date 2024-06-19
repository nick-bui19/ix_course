import React from "react";

export default function Loading() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}