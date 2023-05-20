import iconAlert from "../../../assets/Icon/iconAlert.png";
import { useContext, useEffect, useState } from "react";
import ContextError from "../../../Context/ContextError";
import "./DisplayMsg.css";

export default function Header() {
  const [ErrorData, SetErrorData] = useContext(ContextError);
  const [clas, setClas] = useState("DisplayMsgIdle");

  function Mostrar() {
    setClas("DisplayMsg");
    setTimeout(() => {
      setClas("DisplayMsg1");
    }, 4000);
  }
  function Esconder() {
    setClas("DisplayMsg2");
    setTimeout(() => {
      setClas("DisplayMsgIdle");
    }, 8000);
  }

  useEffect(() => {
    console.log("eeee");
    if (ErrorData === undefined) {
      return;
    } else {
      setClas("DisplayMsg2");
    }
  }, [ErrorData]);

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
