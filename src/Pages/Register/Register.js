import React, { useContext, useEffect } from "react";

import RegisterBody from "../../Components/Body/RegisterBody/RegisterBody";

import "./Register.css";
import ContextPagSelected from "../../Context/ContextPagSelected";

export default function Register() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);
  useEffect(() => {
    SetPagSelected("Register");
  });
  return (
    <>
      <RegisterBody />
    </>
  );
}
