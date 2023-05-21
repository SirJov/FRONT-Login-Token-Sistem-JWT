import iconAlert from "../../../assets/Icon/iconAlert.png";
import { useContext, useEffect, useState } from "react";
import ContextError from "../../../Context/ContextError";
import "./DisplayMsg.css";

export default function Header() {
  const [ErrorData, SetErrorData] = useContext(ContextError);
  const [clas, setClas] = useState("DisplayMsgIdle");
  useEffect(() => {
    if (ErrorData === undefined || ErrorData === "") {
      return;
    } else {
      setClas("DisplayMsg2");
      setTimeout(() => {
        SetErrorData("");
      }, 7000);
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
