import React, { useContext, useEffect } from "react";

import HomeBody from "../../Components/Body/HomeBody/HomeBody";
import ContextPagSelected from "../../Context/ContextPagSelected";

export default function Home() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);
  useEffect(() => {
    SetPagSelected("Home");
  }, []);
  return (
    <>
      <HomeBody />
    </>
  );
}
