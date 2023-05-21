import "./Profile.css";
import { useContext, useEffect } from "react";
import ProfileBody from "../../../Components/Body/PrivateRoutes/ProfileBody/ProfileBody";
import ContextPagSelected from "../../../Context/ContextPagSelected";

export default function Profile() {
  const [PagSelected, SetPagSelected] = useContext(ContextPagSelected);
  useEffect(() => {
    SetPagSelected("Perfil");
  }, []);
  return (
    <div className="Profile">
      <ProfileBody />
    </div>
  );
}
