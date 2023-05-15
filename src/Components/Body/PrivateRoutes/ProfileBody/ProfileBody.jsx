import { useEffect, useState } from "react";
import "./ProfileBody.css";
import ImgOptions from "./imgOptions/imgOptions";

const {
  ArrayImgs,
} = require("../../../Header/ConfigHeader/ProfileHeader/imgProfileConfig");

export default function ProfileBody() {
  const [imgUserState, SetImgUserState] = useState(ArrayImgs[0].img);
  const [userName, SetUserName] = useState();

  const [imgSelected, SetImgSelected] = useState("user_default");

  const [newUserName, SetNewUserName] = useState("");

  useEffect(() => {
    let userString = localStorage.getItem("userData");
    const userObj = JSON.parse(userString);
    SetUserName(userObj.user);
  }, []);

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
        <input placeholder={userName} onChange={getValueInput} />
      </div>
      <ImgOptions
        imgSelected={imgSelected}
        SetImgSelected={SetImgSelected}
        newUserName={newUserName}
      />
    </div>
  );
}
