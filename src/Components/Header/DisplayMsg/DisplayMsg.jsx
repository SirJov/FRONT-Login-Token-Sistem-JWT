import iconAlert from "../../../assets/Icon/iconAlert.png";
import { useContext, useEffect, useState } from "react";
import ContextError from "../../../Context/ContextError";
import "./DisplayMsg.css";

export default function Header() {
  const [ErrorData, SetUErrorData] = useContext(ContextError);
  const [clas, setClas] = useState("DisplayMsgIdle");

  function Mostrar() {
    setClas("DisplayMsg");
    setTimeout(() => {
      setClas("DisplayMsg2");
      setTimeout(() => {
        setClas("DisplayMsgIdle");
      }, 200);
    }, 6000);
  }

  useEffect(() => {}, [ErrorData]);

  return (
    <section className={clas}>
      <div className="backGround">
        <div className="headerAlert">
          <h4>OPS!! Algo deu errado.</h4>
          <img alt="ALERTA VERMELHOOOO" src={iconAlert} />
        </div>
        <div className="bodyAlert">
          <p>{ErrorData}</p>
        </div>
      </div>
    </section>
  );
}
