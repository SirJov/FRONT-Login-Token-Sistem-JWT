import { useContext, useEffect, useState } from "react";

import { SelectImgProfile } from "./imgProfileConfig";

import ContextUser from "../../../../Context/ContextUser";

import "./ProfileHeader.css";

export default function ProfileHeader() {
  const [imgProfileState, setImgProfileState] = useState("user_default");
  const [userNameProfile, setUserNameProfile] = useState("");

  const [UserData] = useContext(ContextUser);

  let userString = localStorage.getItem("userData");
  const userObj = JSON.parse(userString);

  useEffect(() => {
    setUserNameProfile(userObj.user);
    setImgProfileState(userObj.imgProfile);
  }, []);

  useEffect(() => {
    if (userObj) {
      setUserNameProfile(userObj.user);
      setImgProfileState(userObj.imgProfile);
    }
  }, [UserData]);

  return (
    <div className="ProfileHeader">
      <img src={SelectImgProfile(imgProfileState)} />
      <p>{userNameProfile}</p>
    </div>
  );
}
