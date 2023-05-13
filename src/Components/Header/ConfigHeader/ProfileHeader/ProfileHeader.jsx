import { useEffect, useState } from "react";

import SelectImgProfile from "./imgProfileConfig";

import "./ProfileHeader.css";

export default function ProfileHeader() {
  const [imgProfileState, setImgProfileState] = useState("user_default");

  let userString = localStorage.getItem("userData");
  const userObj = JSON.parse(userString);

  useEffect(() => {
    setImgProfileState(userObj.imgProfile);
  }, []);

  useEffect(() => {
    setImgProfileState(userObj.imgProfile);
  }, [imgProfileState]);

  return (
    <div className="ProfileHeader">
      <img src={SelectImgProfile(imgProfileState)} />
      <p>{""}</p>
    </div>
  );
}
