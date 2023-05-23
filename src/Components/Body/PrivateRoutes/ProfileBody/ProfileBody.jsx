import { useContext, useEffect, useState } from "react";
import "./ProfileBody.css";
import ImgOptions from "./imgOptions/imgOptions";
import ContextUser from "../../../../Context/ContextUser";

const {
  ArrayImgs,
} = require("../../../Header/ConfigHeader/ProfileHeader/imgProfileConfig");

export default function ProfileBody() {
  const [imgUserState, SetImgUserState] = useState(ArrayImgs[0].img);
  const [UserData] = useContext(ContextUser);
  const [imgSelected, SetImgSelected] = useState("user_default");

  const [newUserName, SetNewUserName] = useState("");

  useEffect(() => {
    if (UserData) {
    } else {
      let userString = localStorage.getItem("userData");
      let userObj = JSON.parse(userString);
    }
  }, [UserData]);
  useEffect(() => {
    const imgSel = meetImg(imgSelected);
    SetImgUserState(imgSel);
  }, [imgSelected]);

  const getValueInput = (event) => {
    SetNewUserName(event.target.value);
  };
  function meetImg(i) {
    const imgN = ArrayImgs.find((imgN) => imgN.nameImg === i);
    return imgN.img;
  }

  return (
    <div className="ProfileBody">
      <div className="IconPerfilAndName">
        <img src={imgUserState} />
        <input placeholder={"Add novo nome"} onChange={getValueInput} />
      </div>
      <ImgOptions
        imgSelected={imgSelected}
        SetImgSelected={SetImgSelected}
        newUserName={newUserName}
      />
    </div>
  );
}
