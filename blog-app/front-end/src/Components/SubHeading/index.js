import React from "react";
import './index.css';

export default function SubHeading({ subHeading }) {
  return <p className="page-subtitle d-flex w-100 justify-content-left align-items-left">{subHeading}</p>;
}