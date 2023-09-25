import React from "react";
import { useParams } from "react-router-dom";

export default function DoctorInfo() {
  const { id } = useParams();
  return <div>DoctorInfo {id}</div>;
}
