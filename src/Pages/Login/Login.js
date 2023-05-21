import React, { useContext, useEffect } from "react";
import LoguinBody from "../../Components/Body/LoginBody/LoginBody";
import ContextPagSelected from "../../Context/ContextPagSelected";

export default function Login() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);
  useEffect(() => {
    SetPagSelected("Login");
  }, []);
  return (
    <>
      <LoguinBody />
    </>
  );
}
